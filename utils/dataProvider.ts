import * as fs from 'fs';
import { parse } from 'csv-parse/sync';
export class DataProvider {
    static getDataFromJson(filePath: string): any {
         try{
            let data=JSON.parse(fs.readFileSync(filePath,'utf-8'));
            return data;
        }catch(error){
            console.error(`Error reading JSON file ${filePath}: ${error}`);
            throw error;
        }
    }

    static getTestDataFromCsv(filePath: string): any {

        let data:any = parse(fs.readFileSync(filePath, 'utf-8'), {
            columns: true,
            skip_empty_lines: true
        });
        return data;

    }
}

/*
        try{
            let data=JSON.parse(fs.readFileSync(filePath,'utf-8'));
            return data;
        }catch(error){
            console.error(`Error reading JSON file ${filePath}: ${error}`);
            throw error;
        }

        try{
            let data=JSON.parse(fs.readFileSync(filePath,'utf-8'));
            return data;
        }catch(error){
            console.error(`Error reading JSON file ${filePath}: ${error}`);
            throw error;
        }
            */
