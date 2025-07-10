import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{t('welcome')}</h1>
      <label>{t('language_label')}: </label>
      <select
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        defaultValue={i18n.language}
      >
        <option value="zh">中文</option>
        <option value="en">English</option>
      </select>

      <br /><br />
      <input
        type="text"
        placeholder={t('ask_placeholder')}
        style={{ width: '300px' }}
      />
      <button>{t('submit_button')}</button>
    </div>
  );
}

export default App;
