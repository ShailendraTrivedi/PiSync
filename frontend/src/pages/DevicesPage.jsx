import React, { useEffect, useState } from "react";
import { fetchDevices, triggerSync } from "../services/api";
import styleConstant from "../assets/constants/StyleConstant";
import { getStyleClass } from "../services/common-services";
import GetSvgIcons from "../services/SvgIcons";

function DevicesPage() {
  const [devices, setDevices] = useState([]);
  const [isSync, setIsSync] = useState(false);
  const [deviceId, setDeviceID] = useState("");

  const loadDevices = async () => {
    const res = await fetchDevices();
    setDevices(res.data);
  };

  const handleSync = async (deviceId) => {
    try {
      setDeviceID(deviceId);
      setIsSync(true);
      const res = await triggerSync(deviceId);

      console.log(res);

      const updateDevices = devices.map((device) => {
        if (device.id == res.data.device.id) {
          return res.data.device;
        } else return device;
      });
      setDevices(updateDevices);

      setIsSync(false);
      setDeviceID("");
    } catch (error) {
      console.error(error);
      alert("Failed to trigger sync.");
      setIsSync(false);
      setDeviceID("");
    }
  };

  useEffect(() => {
    loadDevices();
  }, []);

  return (
    <div>
      <div className="w-full py-[50px] h-[50px] sticky top-[65px] bg-white">
        <div className="w-[100%] text-[20px] text-white h-[3em] flex justify-center items-center bg-gradient-to-r from-red-300 via-blue-500 to-red-300">
          <div className="text-[20px]">DEVICES STATUS</div>
        </div>
      </div>

      <div className="mt-10 border-red-500 border-2">
        <table className="w-full  border border-gray-400 border-separate border-spacing-0 ">
          <thead>
            <tr className="w-full sticky  bg-white z-10 top-[115.2px]">
              <th className={styleConstant.tableHeaderStyle}>S.No</th>
              <th className={styleConstant.tableHeaderStyle}>Device ID</th>
              <th className={styleConstant.tableHeaderStyle}>Last Sync Time</th>
              <th className={styleConstant.tableHeaderStyle}>Sync Status</th>
              <th className={styleConstant.tableHeaderStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device, index) => (
              <tr key={device?.id}>
                <td className={styleConstant.tableDataStyle}>{index + 1}</td>
                <td className={`${styleConstant.tableDataStyle} font-medium`}>
                  {device?.id}
                </td>
                <td className={styleConstant.tableDataStyle}>
                  {new Date(device?.lastSyncTime).toLocaleString()}
                </td>
                <td
                  className={`${styleConstant.tableDataStyle}  ${getStyleClass(
                    device?.syncStatus
                  )}`}
                >
                  {device?.syncStatus}
                </td>
                <td
                  className={`${styleConstant.tableDataStyle} flex justify-center`}
                >
                  <button
                    className={`${
                      deviceId == device?.id && isSync
                        ? "text-red-500 border-red-500"
                        : "hover:text-red-500 text-green-500 border-green-500 hover:border-red-500"
                    }  flex items-center cursor-pointer  border-[2px] px-5 py-2 rounded-[50px]`}
                    onClick={() => handleSync(device?.id)}
                  >
                    <span className="pr-2">Sync Now</span>
                    <span
                      className={`${
                        deviceId == device?.id && isSync ? "animate-spin" : ""
                      }`}
                    >
                      <GetSvgIcons iconName={"REFRESH"} />
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DevicesPage;
