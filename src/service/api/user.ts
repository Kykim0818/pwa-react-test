import { testAsync } from "../../utils/test-promise";

export type User = {
  id: string;
  imgSrc: string;
  moneySum: number;
  fieldGameCount: number;
  screenGameCount: number;
  status: null | any;
};

export const getUser = (userId: string) => {
  let user: null | User = null;
  const ret = testAsync(() => mockUserInfo, 100).then((res: any) => {
    user = res;
  });
  // const ret = await axios.get<User>(
  //   "https://my-json-server.typicode.com/typicode/demo/posts"
  // );
  return {
    read() {
      if (user === null) {
        throw ret;
      } else {
        return user;
      }
    },
  };
};

const mockUserInfo = {
  id: "TEST",
  imgSrc: process.env.PUBLIC_URL + "/assets/images/profile_test_img.png",
  moneySum: 100000,
  fieldGameCount: 0,
  screenGameCount: 30,
  status: null,
};
