// 커스텀 훅 추가 예시

import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const useTheme = () => useContext(ThemeContext);

export default useTheme;
