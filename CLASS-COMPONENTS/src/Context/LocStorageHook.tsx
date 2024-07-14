import { useState, useEffect, Dispatch, SetStateAction } from "react";

// Определение типов для хука
type UseSearchQueryLocalStorageHook = [
  string,
  Dispatch<SetStateAction<string>>,
];

// Кастомный хук для управления поисковым запросом и его сохранением в LS
export const useSearchQueryLocalStorageHook =
  (): UseSearchQueryLocalStorageHook => {
    const [searchQuery, setSearchQuery] = useState<string>(() => {
      // Используем localStorage.getItem для восстановления значения при загрузке
      const savedQuery = localStorage.getItem("searchValue") || "";
      return savedQuery;
    });

    useEffect(() => {
      // Сохраняем текущее значение searchQuery в localStorage при его изменении
      localStorage.setItem("searchValue", searchQuery);
    }, [searchQuery]);

    // Функция для установки нового значения searchQuery
    const updateSearchQuery: Dispatch<SetStateAction<string>> = (query) => {
      setSearchQuery(query);
    };

    return [searchQuery, updateSearchQuery];
  };
