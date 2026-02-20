const Sidebar = () => {
  return (
    <aside className="w-[320px] h-full bg-gray-100 border-r border-gray-200 flex flex-col">
      <div className="h-14 border-b border-gray-200 flex items-center px-4 font-semibold">
        Sidebar
      </div>

      <div className="flex-1 overflow-y-auto p-4">{/* sidebar content */}</div>
    </aside>
  );
};

export default Sidebar;
