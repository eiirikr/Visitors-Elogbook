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
    company: "", // Added company field
  },
  errors: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    purpose: "",
    company: "", // Added company error
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, showModal: true };
    case "HIDE_MODAL":
      return {
        ...state,
        showModal: false,
        formData: initialState.formData,
        errors: initialState.errors,
      };
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
            date: new Date().toLocaleDateString(), // Add the current date
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
  if (!formData.company) errors.company = "Company name is required"; // Validate company

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
    <div className="container mx-auto mt-6 max-w-4xl rounded-lg bg-white p-6 shadow-lg">
      <h2 className="text-gray-800 mb-6 text-center text-2xl font-semibold">
        Tracking and Integrating Management of Visitor Logs
      </h2>

      <ButtonThree
        className="bg-blue-600 hover:bg-blue-700 w-full rounded-lg px-6 py-2 font-semibold text-white transition duration-200 sm:w-auto"
        onClick={() => dispatch({ type: "SHOW_MODAL" })}
      >
        Log In
      </ButtonThree>

      <div className="mt-6 overflow-x-auto">
        <table className="border-gray-300 min-w-full table-auto border-separate border-spacing-0 border text-center">
          <thead className="bg-blue-100">
            <tr>
              <th className="border-gray-300 text-gray-700 border p-3 text-sm">
                #
              </th>
              <th className="border-gray-300 text-gray-700 border p-3 text-sm">
                Date
              </th>
              <th className="border-gray-300 text-gray-700 border p-3 text-sm">
                Full Name
              </th>
              <th className="border-gray-300 text-gray-700 border p-3 text-sm">
                Company
              </th>
              <th className="border-gray-300 text-gray-700 border p-3 text-sm">
                Phone
              </th>
              <th className="border-gray-300 text-gray-700 border p-3 text-sm">
                Purpose
              </th>
              <th className="border-gray-300 text-gray-700 border p-3 text-sm">
                Time In
              </th>
              <th className="border-gray-300 text-gray-700 border p-3 text-sm">
                Time Out
              </th>
              <th className="border-gray-300 text-gray-700 border p-3 text-sm">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {state.visitors.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-gray-500 py-4">
                  No visitors yet
                </td>
              </tr>
            ) : (
              state.visitors.map((visitor, index) => (
                <tr key={index}>
                  <td className="border-gray-300 border p-3">{index + 1}</td>
                  <td className="border-gray-300 border p-3">
                    {visitor.date}
                  </td>{" "}
                  {/* Date column */}
                  <td className="border-gray-300 border p-3">
                    {visitor.firstName} {visitor.lastName}
                  </td>
                  <td className="border-gray-300 border p-3">
                    {visitor.company}
                  </td>{" "}
                  {/* Company column */}
                  <td className="border-gray-300 border p-3">
                    {visitor.phone}
                  </td>
                  <td className="border-gray-300 border p-3">
                    {visitor.purpose}
                  </td>
                  <td className="border-gray-300 border p-3">
                    {visitor.logIn}
                  </td>
                  <td className="border-gray-300 border p-3">
                    {visitor.logOut || "—"}
                  </td>
                  <td className="border-gray-300 border p-3">
                    {!visitor.logOut && (
                      <ButtonThree
                        className="bg-red-600 hover:bg-red-700 rounded-lg px-3 py-1 text-white"
                        onClick={() =>
                          dispatch({ type: "LOG_OUT_VISITOR", payload: index })
                        }
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
        <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-dialog w-full max-w-full rounded-lg bg-white p-6 shadow-lg sm:w-1/2 sm:max-w-lg">
            <div className="modal-header flex items-center justify-between">
              <h5 className="text-gray-800 text-xl font-semibold">Log In</h5>
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
                      type={
                        key === "email"
                          ? "email"
                          : key === "phone"
                          ? "tel"
                          : "text"
                      }
                      className="form-input border-gray-300 placeholder-gray-200 w-full rounded-lg border bg-transparent p-3 text-black"
                      placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                      value={state.formData[key]}
                      onChange={(e) =>
                        dispatch({
                          type: "UPDATE_FORM",
                          payload: { [key]: e.target.value },
                        })
                      }
                    />
                    {state.errors[key] && (
                      <p className="text-red-500 mt-1 text-sm">
                        {state.errors[key]}
                      </p>
                    )}
                  </div>
                ))}

                <div className="flex justify-end space-x-2">
                  <ButtonThree
                    className={`${
                      isSubmitting
                        ? "bg-gray-400"
                        : "bg-green-600 hover:bg-green-700"
                    } rounded-lg px-4 py-2 text-white`}
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
