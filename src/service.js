import ky from "ky";

const service = {
  async requestChartData() {
    const json = await ky
      .get("https://my-json-server.typicode.com/coakenfold/db/sales")
      .json();
    return json;
  },
};
export default service;
