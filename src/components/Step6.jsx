const Step6 = ({ setData, data }) => {
  return (
    <div>
      <h1 className="mb-2 mt-2 font-bold">Review your information</h1>
      <h3 className="mb-2 font-semibold">
        Login: <span className="font-normal"> {data.login}</span>
      </h3>
      <h3 className="mb-2 font-semibold">
        Password: <span className="font-normal"> {data.password}</span>
      </h3>
      <h3 className="mb-2 font-semibold">
        Confirm Password: <span className="font-normal"> {data.password}</span>
      </h3>
      <h3 className="mb-2 font-semibold">
        Subscription type: <span className="font-normal"> {data.date}</span>
      </h3>
      <h3 className="mb-2 font-semibold">
        First Name: <span className="font-normal"> {data.firstName}</span>
      </h3>
      <h3 className="mb-2 font-semibold">
        Last Name: <span className="font-normal"> {data.lastName}</span>
      </h3>
      <h3 className="mb-2 font-semibold">
        Middle Name: <span className="font-normal"> {data.middleName}</span>
      </h3>
      <h3 className="mb-2 font-semibold">
        Birthdate: <span className="font-normal"> {data.birthDate}</span>
      </h3>
      <h3 className="mb-2 font-semibold">
        Email: <span className="font-normal"> {data.email}</span>
      </h3>
      <h3 className="mb-2 font-semibold">
        Gender: <span className="font-normal"> {data.gender}</span>
      </h3>
      <h3 className="mb-2 font-semibold">
        Are you older than 18?
        <span className="font-normal"> {data.olderthan18}</span>
      </h3>
      <h3 className="mb-2 font-semibold">
        Card Number:
        <span className="font-normal"> {data.cardNumber}</span>
      </h3>
      <h3 className="mb-2 font-semibold">
        Consent to personal data processing:
        <span className="font-normal"> {data.consent}</span>
      </h3>
      <h3 className="mb-5 font-semibold">
        Site uses cookie agreement:
        <span className="font-normal"> {data.cookie}</span>
      </h3>
    </div>
  );
};

export default Step6;
