import { columnType ,rowType} from '../Types';
import uniqueId from '../../utils';

export const isChecked = (col: columnType) => col.checked;

export const buildColumns = (rows : rowType[],colsToDisplay:string[]| undefined) => {
    let cols : columnType[] = [];
    Object.keys(rows[0]).map(name => {
        if(!name.startsWith('_')){
         let checked = colsToDisplay ? colsToDisplay.includes(name) : true;
         cols.push({id:uniqueId('c-name'),name,checked})
        }
        return name;
    })
    return cols;
}