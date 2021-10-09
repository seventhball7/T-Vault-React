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
export const isSelected = (id) => ({
  type: types.SELECTED_SAFE,
  payload: id,
});
export const addFolder = (secretData) => ({
  type: types.ADDFOLDER,
  payload: secretData,
});
