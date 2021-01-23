import ky from "ky";
const service = {
  async requestChartData() {
    try {
      const json = await ky
        .get("https://my-json-server.typicode.com/coakenfold/db/sales")
        .json();
      return json;
    } catch (error) {
      return { error: true, errorType: "api" };
    }
  },
};
export default service;
