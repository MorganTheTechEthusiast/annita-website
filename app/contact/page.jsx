const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
      {/* Left Section */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-5xl font-bold leading-tight text-vibrant-orange mb-100">
          Contact Our <br /> Sales team
        </h2>
        <p className="text-lg text-gray-700 mt-6">
          With Annita you can sell online, process payments, build financial
          products, or use business tools designed to grow your business.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Please complete the form on the right to connect with a member of our
          team.
        </p>
      </div>

      {/* Right Section (Form) */}
      <div className="md:w-1/2 w-full bg-gray-100 p-6 rounded-lg shadow-md mt-10">
        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Full name"
            className="p-3 border rounded-md"
          />
          <input
            type="text"
            placeholder="Company name"
            className="p-3 border rounded-md"
          />
          <input
            type="email"
            placeholder="Email address"
            className="p-3 border rounded-md"
          />
          <select className="p-3 border rounded-md">
            <option>Country your business is registered</option>
          </select>
          <select className="p-3 border rounded-md">
            <option>Countries you want to collect payments from</option>
          </select>
          <input
            type="tel"
            placeholder="Phone number"
            className="p-3 border rounded-md"
          />
          <select className="p-3 border rounded-md">
            <option>Business type</option>
          </select>

          <input
            type="text"
            name="website"
            className="w-full p-3 border rounded-lg"
          />
          <select
            name="employees"
            required
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Number of employees</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
          </select>
          <select
            name="volume"
            required
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Annual processing volume in USD</option>
            <option value="<50K">Less than 50K</option>
            <option value="50K-500K">50K-500K</option>
            <option value=">500K">More than 500K</option>
          </select>
          <select
            name="industry"
            required
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Industry</option>
            <option value="Tech">Tech</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
          </select>
          <select
            name="solution"
            required
            className="w-full p-3 border rounded-lg"
          >
            <option value="">
              What specific solution are you interested in?
            </option>
            <option value="Marketing">Marketing</option>
            <option value="Consulting">Consulting</option>
          </select>
          <button
            type="submit"
            className="bg-black text-vibrant-orange p-3 rounded-md font-medium hover:opacity-80"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
