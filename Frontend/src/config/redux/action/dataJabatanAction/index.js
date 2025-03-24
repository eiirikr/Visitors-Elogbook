import axios from 'axios';
import {
    GET_db_vms_SUCCESS,
    GET_db_vms_FAILURE,
    CREATE_db_vms_SUCCESS,
    CREATE_db_vms_FAILURE,
    UPDATE_db_vms_SUCCESS,
    UPDATE_db_vms_FAILURE,
    DELETE_db_vms_SUCCESS,
    DELETE_db_vms_FAILURE
} from './dataJabatanActionTypes';

const API_URL = 'http://localhost:5000';

export const getDataJabatan = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${API_URL}/db_vms`);
            dispatch({
                type: GET_db_vms_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: GET_db_vms_FAILURE,
                payload: error.message
            });
        }
    };
};

export const createDataJabatan = (formData, navigate) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${API_URL}/db_vms`, formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            });
            dispatch({
                type: CREATE_db_vms_SUCCESS,
                payload: response.data
            });
            navigate("/data-jabatan");
            return response.data;
        } catch (error) {
            dispatch({
                type: CREATE_db_vms_FAILURE,
                payload: error.message
            });
            throw error;
        }
    };
};

export const updateDataJabatan = (id, data) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${API_URL}/db_vms/${id}`, data);
            dispatch({
                type: UPDATE_db_vms_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: UPDATE_db_vms_FAILURE,
                payload: error.message
            });
        }
    };
};

export const deleteDataJabatan = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${API_URL}/db_vms/${id}`);
            dispatch({
                type: DELETE_db_vms_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: DELETE_db_vms_FAILURE,
                payload: error.message
            });
        }
    };
};
