
function Search({ onSearch }) { 
  const handleChange = (e) => {
    onSearch(e.target.value); 
  };

  return (
    <div className="border mx-4 p-2 ">
      <input
      className=" outline-none "
        type="text"
        placeholder="Search your Recent Transactions..."
        onChange={handleChange} 
      />
    
    </div>
  );
}

export default Search;
