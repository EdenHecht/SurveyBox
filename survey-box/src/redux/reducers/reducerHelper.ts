import axios from "axios";
import IPage from "../../pageClasses/IPage";

const url = "http://localhost:5000";

export const createNewSurveyPage = async (id: string, page: IPage) => {
  const urlsurevy = `${url}/survey/${id}`;
  axios
    .post(urlsurevy, { page })
    .then((res) => console.log(res))
    .catch((err) => err);
};
