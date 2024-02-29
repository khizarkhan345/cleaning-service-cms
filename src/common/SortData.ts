import { orders } from "../Types/Types";
const sortData = (data: orders[], sortOption: string) => {
   
    const sortVariable = sortOption.split(" ")[0];
   
    const sortOrder = sortOption.split(" ")[1];
    

    const sortedData: any = data.length > 0 ? data[0].sort((a: any, b: any) => {

      const dateA = new Date(a[sortVariable]);
      const dateB = new Date(b[sortVariable]);

      if(sortOrder === 'asc'){
        return dateA.getTime() - dateB.getTime();
      }else {
        return dateB.getTime() - dateA.getTime();
      }
   }):[];

   return sortedData;

}

export default sortData;