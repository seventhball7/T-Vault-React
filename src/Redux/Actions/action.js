import types from "./type";

export const addActionevent = (formData) => ({
  type: types.CREATESAFE,
  payload: formData,
});

export const editEvent = (formData) => ({
  type: types.EDITSAFE,
  payload: formData,
});
export const deleteEvent = (formData) => ({
  type: types.DELETE_SAFE,
  payload: formData,
});
