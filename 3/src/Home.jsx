import React, {useContext} from 'react';

import ThemeContext from './contexts';

const Home = () => {
    // BEGIN (write your solution here)
    let {theme} = useContext(ThemeContext);
    // END

    return (
        <article className={theme.className}>
            Текст для вкладки Home
        </article>
    );
};

export default Home;
