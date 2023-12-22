import React from "react";

const FAQ = () => {
  return (
    <div className="mx-10">
      <div className="max-w-2xl  mx-auto mt-8 p-6 shadow-xl my-10 border border-gray-500 rounded-md">
        <h1 className="text-3xl font-bold mb-6">FAQs</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            1. How to add a new Todo?
          </h2>
          <p className="text-gray-700">
            To add a new Todo, click on the "Add Todo" button on the homepage.
            Fill in the required details such as title, description, priority,
            and deadline in the form, then click the "Submit" button.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            2. How can I mark a Todo as ongoing?
          </h2>
          <p className="text-gray-700">
            To mark a Todo as ongoing, click on the "Mark as Ongoing" button on
            the Todo card. A confirmation prompt will appear; click "Mark as
            Ongoing" to proceed.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            3. Can I edit an existing Todo?
          </h2>
          <p className="text-gray-700">
            Yes, you can edit an existing Todo by clicking on the "Edit" button
            on the Todo card. It will take you to the edit page where you can
            modify the Todo details and save the changes.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            4. How to delete a Todo?
          </h2>
          <p className="text-gray-700">
            To delete a Todo, click on the "Delete" button on the Todo card. A
            confirmation prompt will appear; click "Yes, delete it!" to
            permanently remove the Todo.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            5. Is there a way to reorder Todos?
          </h2>
          <p className="text-gray-700">
            Currently, the ability to reorder Todos is not available. However,
            it is a feature under consideration for future updates.
          </p>
        </div>

        {/* Add more FAQs as needed */}
      </div>
    </div>
  );
};

export default FAQ;
