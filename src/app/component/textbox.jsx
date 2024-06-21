function Textbox(props) {
  return (
    <div>
      <label
        htmlFor="companyName" // Changed to 'companyName' to reflect its purpose
        className="block text-base font-bold text-black dark:text-gray-300 pl-2" // Changed 'text-sm' to 'text-base' for larger font, 'text-gray-500' to 'text-black' for darker text
      >
        Company Name
      </label>

      <input
        id="companyName" // Changed to match the label's htmlFor
        type="text"
        placeholder="Enter company name" // Updated placeholder text
        className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-black focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-300" // Changed 'text-gray-700' to 'text-black' and adjusted dark mode text color to white
      />
    </div>
  );
}

export default Textbox;
