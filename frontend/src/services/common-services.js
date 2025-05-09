export function getStyleClass(value){
    switch(value){
        case 'Success': return 'text-green-500';
        case 'Pending': return 'text-yellow-500';
        case 'Failed' : return 'text-red-500';
        default: return '';
    }
}