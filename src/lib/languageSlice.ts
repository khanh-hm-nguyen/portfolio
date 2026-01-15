import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  current: 'en' | 'vi';
}

const initialState: LanguageState = {
  current: 'en',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.current = state.current === 'en' ? 'vi' : 'en';
    },
    setLanguage: (state, action: PayloadAction<'en' | 'vi'>) => {
      state.current = action.payload;
    },
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;