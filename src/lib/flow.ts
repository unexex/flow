import { saveJSON, loadJSON } from "./utils";

var saveName = "flow-deploy"

export function addTrans(date: any, amount: number, title: string, source: string, pos: boolean) {
    let table = loadJSON(saveName)
    table.push({
      date: date.toLocaleString(),
      amount: amount,
      title: title,
      positive: pos,
      source: source,
    })

    saveJSON(saveName, table)
}
export function getTrans() {
    return loadJSON(saveName)
}
export function connect() {
  
}
export function exportData() {
  
}