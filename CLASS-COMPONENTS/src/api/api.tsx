import { BASE_URL } from "../Helpers/StaticData";
import { DataAll } from "../types/dataInterface";

export async function fetchStarWarsPeople(searchValue: string) {
  try {
    let URL = BASE_URL;

    if (searchValue && searchValue !== "") {
      URL += `?search=${searchValue}`;
    }

    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Ошибка при получении данных");
    }
    const data = (await response.json()) as DataAll;
    return data;
  } catch (error) {
    console.error("Ошибка при получении персонажей Star Wars:", error);
    throw error;
  }
}
