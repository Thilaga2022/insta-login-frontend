import langs from 'langs';

const Languages = () => {
  const languageList = langs.names(); // ['English', 'French', ...]

  return (
    <select style={{color:'gray',border:'none',outline:'none',width:'4.5rem',fontSize:'0.6rem'}}>
      {languageList.map((lang) => {
        const { '1': code } = langs.where("name", lang);
        return (
          <option key={code} value={code} style={{color:'gray'}}>
            {lang}
          </option>
        );
      })}
    </select>
  );
};

export default Languages;
