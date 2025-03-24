import {
    GET_db_vms_SUCCESS,
    GET_db_vms_FAILURE,
    CREATE_db_vms_SUCCESS,
    CREATE_db_vms_FAILURE,
    UPDATE_db_vms_SUCCESS,
    UPDATE_db_vms_FAILURE,
    DELETE_db_vms_SUCCESS,
    DELETE_db_vms_FAILURE
} from '../../action/dataJabatanAction/dataJabatanActionTypes';

const initialState = {
    dataJabatan: [],
    message: null,
    error: null
};

const dataJabatanReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_db_vms_SUCCESS:
            return {
                ...state,
                dataJabatan: action.payload,
                message: null,
                error: null,
            };
        case GET_db_vms_FAILURE:
            return {
                ...state,
                error: action.payload,
                message: '',
            };
        case CREATE_db_vms_SUCCESS:
            return {
                ...state,
                message: null,
                error: null,
            };
        case CREATE_db_vms_FAILURE:
            return {
                ...state,
                error: action.payload.message,
                message: null,
            };
        case UPDATE_db_vms_SUCCESS:
            return {
                ...state,
                message: action.payload,
                error: null,
            };
        case UPDATE_db_vms_FAILURE:
            return {
                ...state,
                error: action.payload,
                message: null,
            };
        case DELETE_db_vms_SUCCESS:
            return {
                ...state,
                message: action.payload,
                error: null,
            };
        case DELETE_db_vms_FAILURE:
            return {
                ...state,
                error: action.payload,
                message: null,
            };
        default:
            return state;
    }
};

export default dataJabatanReducer;
    