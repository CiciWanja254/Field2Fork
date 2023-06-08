function ProfileCard() {
  return (
    <div className="max-w-sm mx-auto mt-12 bg-white border border-gray-200 rounded-lg shadow w-64">
      <div className="flex flex-col items-center pb-6 pt-6">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="/path/to/farm-logo.png"
          alt="Farm Logo"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">
          User
        </h5>
        <span className="text-sm text-gray-500">
          Location, Country
        </span>
        <div className="flex mt-4 space-x-3">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Add Friend
          </a>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
          >
            Message
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
