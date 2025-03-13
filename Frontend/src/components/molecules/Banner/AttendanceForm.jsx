import { useReducer, useState } from "react";
import { ButtonThree } from "../../atoms";

// Initial state for the application
const initialState = {
  visitors: [],
  showModal: false,
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    purpose: "",
  },
  errors: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    purpose: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, showModal: true };
    case "HIDE_MODAL":
      return { ...state, showModal: false, formData: initialState.formData, errors: initialState.errors };
    case "UPDATE_FORM":
      return { ...state, formData: { ...state.formData, ...action.payload } };
    case "ADD_VISITOR":
      return {
        ...state,
        visitors: [
          ...state.visitors,
          {
            ...state.formData,
            logIn: new Date().toLocaleTimeString(),
            logOut: "",
          },
        ],
        showModal: false,
        formData: initialState.formData,
      };
    case "LOG_OUT_VISITOR":
      return {
        ...state,
        visitors: state.visitors.map((visitor, index) =>
          index === action.payload
            ? { ...visitor, logOut: new Date().toLocaleTimeString() }
            : visitor
        ),
      };
    case "SET_ERRORS":
      return { ...state, errors: { ...state.errors, ...action.payload } };
    default:
      return state;
  }
};

const validateForm = (formData) => {
  const errors = {};
  if (!formData.firstName) errors.firstName = "First name is required";
  if (!formData.lastName) errors.lastName = "Last name is required";
  if (!formData.email) errors.email = "Email is required";
  if (!formData.phone) errors.phone = "Phone number is required";
  if (!formData.purpose) errors.purpose = "Purpose is required";

  return errors;
};

const AttendanceForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(state.formData);
    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", payload: errors });
      return;
    }

    setIsSubmitting(true);
    dispatch({ type: "ADD_VISITOR" });
    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto mt-6 p-6 bg-white rounded-lg shadow-lg max-w-4xl">
      <h2 className="text-center mb-6 text-2xl font-semibold text-gray-800">Visitors Elogbook System</h2>

      <ButtonThree
        className="w-full sm:w-auto bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
        onClick={() => dispatch({ type: "SHOW_MODAL" })}
      >
        Log In
      </ButtonThree>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full text-center table-auto border-separate border-spacing-0 border border-gray-300">
          <thead className="bg-blue-100">
            <tr>
              <th className="border border-gray-300 p-3 text-sm text-gray-700">#</th>
              <th className="border border-gray-300 p-3 text-sm text-gray-700">Name</th>
              <th className="border border-gray-300 p-3 text-sm text-gray-700">Email</th>
              <th className="border border-gray-300 p-3 text-sm text-gray-700">Phone</th>
              <th className="border border-gray-300 p-3 text-sm text-gray-700">Purpose</th>
              <th className="border border-gray-300 p-3 text-sm text-gray-700">Log In</th>
              <th className="border border-gray-300 p-3 text-sm text-gray-700">Log Out</th>
              <th className="border border-gray-300 p-3 text-sm text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {state.visitors.length === 0 ? (
              <tr>
                <td colSpan="8" className="py-4 text-gray-500">No visitors yet</td>
              </tr>
            ) : (
              state.visitors.map((visitor, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-3">{index + 1}</td>
                  <td className="border border-gray-300 p-3">{visitor.firstName} {visitor.lastName}</td>
                  <td className="border border-gray-300 p-3">{visitor.email}</td>
                  <td className="border border-gray-300 p-3">{visitor.phone}</td>
                  <td className="border border-gray-300 p-3">{visitor.purpose}</td>
                  <td className="border border-gray-300 p-3">{visitor.logIn}</td>
                  <td className="border border-gray-300 p-3">{visitor.logOut || "—"}</td>
                  <td className="border border-gray-300 p-3">
                    {!visitor.logOut && (
                      <ButtonThree
                        className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700"
                        onClick={() => dispatch({ type: "LOG_OUT_VISITOR", payload: index })}
                      >
                        Log Out
                      </ButtonThree>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {state.showModal && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="modal-dialog bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-full sm:max-w-lg w-full sm:w-1/2">
            <div className="modal-header flex justify-between items-center">
              <h5 className="text-xl font-semibold text-gray-800">Log In</h5>
              <ButtonThree
                className="text-gray-500 hover:text-gray-800"
                onClick={() => dispatch({ type: "HIDE_MODAL" })}
              >
                &times;
              </ButtonThree>
            </div>
            <div className="modal-body mt-4">
              <form onSubmit={handleSubmit}>
                {Object.keys(initialState.formData).map((key) => (
                  <div className="mb-4" key={key}>
                    <input
                      type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
                      className="form-input w-full p-3 border border-gray-300 rounded-lg bg-transparent text-white placeholder-gray-200"
                      placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                      value={state.formData[key]}
                      onChange={(e) =>
                        dispatch({ type: "UPDATE_FORM", payload: { [key]: e.target.value } })
                      }
                    />
                    {state.errors[key] && (
                      <p className="text-sm text-red-500 mt-1">{state.errors[key]}</p>
                    )}
                  </div>
                ))}

                <div className="flex justify-end space-x-2">
                  <ButtonThree
                    className={`${
                      isSubmitting ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
                    } text-white py-2 px-4 rounded-lg`}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </ButtonThree>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AttendanceForm;
