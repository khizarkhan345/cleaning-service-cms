import { orders } from "../Types/Types";

const filterData = (data: orders[], filterOption: string[]) => {
  
    return data.length > 0 ? data[0].filter(d => {
        if(filterOption.includes(d.orderStatus.toLowerCase())){
            return d;
        }
    }):[]
}

export default filterData;