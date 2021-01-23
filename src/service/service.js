import ky from "ky";
import normalizeData from "./normalizeData";
const service = {
  async requestChartData() {
    try {
      const json = await ky
        .get("https://my-json-server.typicode.com/coakenfold/db/sales")
        .json();
      return normalizeData(json);
    } catch (error) {
      return { error: true, errorType: "api" };
    }
  },
};
export default service;
