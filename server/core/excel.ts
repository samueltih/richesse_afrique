import { Workbook } from "exceljs";

/**
 *
 */
export interface WorkbookData {
  sheets: {
    [key: string]: {
      columns?: string[];
      rows?: Array<any>;
    };
  };
}

/**
 *
 * @param filename
 */
export async function readXslx(
  file: File | string,
  adapter?: (data: WorkbookData) => any
): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      let workbook = new Workbook();
      workbook = await workbook.xlsx.readFile(
        file instanceof File ? (file as File).name : file
      );

      let data: WorkbookData = { sheets: {} };
      workbook.eachSheet((worksheet, id) => {
        data.sheets[worksheet.name || worksheet.id] = {
            columns: worksheet.columns.map((column, index) => column.key!),
            rows: worksheet.getRows(0, worksheet.rowCount)?.map((row, index) => row.values)
        };
      });

      if (adapter) {
        resolve(adapter(data));
      } else {
        resolve(data);
      }
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
}

/**
 * 
 * @param data 
 * @returns 
 */
export async function writeXslx(data: WorkbookData): Promise<Buffer> {
  return new Promise(async (resolve, reject) => {
    try {
      const workbook = new Workbook();
      Object.entries(data.sheets).forEach((value, index) => {
        const worksheet = workbook.addWorksheet(value[0]);
        worksheet.columns = value[1].columns!.map((column, index) => ({
          header: column,
          key: 'index',
        }));

        worksheet.addRows(value[1].rows!);
      });

      const buffer = await workbook.xlsx.writeBuffer();
      resolve(buffer as Buffer);
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
}
