import { testAsync } from "../../utils/test-promise";

export type User = {
  id: string;
  imgSrc: string;
  moneySum: number;
  fieldGameCount: number;
  screenGameCount: number;
  status: null | any;
};

export const getUser = async (): Promise<User> => {
  const ret = await testAsync(() => mockUserInfo, 100);
  // const ret = await axios.get<User>(
  //   "https://my-json-server.typicode.com/typicode/demo/posts"
  // );
  return ret as User;
};

const mockUserInfo = {
  id: "TEST",
  imgSrc: "",
  moneySum: 100000,
  fieldGameCount: 50,
  screenGameCount: 30,
  status: null,
};
