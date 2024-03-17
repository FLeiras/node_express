import { Visibility, Weather } from "../types";

export const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error("Incorrect or missing comment");
  }

  return commentFromRequest;
};

export const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error("Incorrect or missing date");
  }

  return dateFromRequest;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isString = (string: string): boolean => {
  return typeof string === "string";
};

export const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error("Incorrect or missing weather");
  }

  return weatherFromRequest;
};

export const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (
    !isString(visibilityFromRequest) ||
    !isVisibility(visibilityFromRequest)
  ) {
    throw new Error("Incorrect or missing weather");
  }

  return visibilityFromRequest;
};

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param);
};

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param);
};
