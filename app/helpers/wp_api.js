let prueba1="https://css-tricks.com",
prueba2="https://www.totalwar.com",
prueba3="https://devir.com.ar",
prueba4="https://wvw.cinecalidad.com.mx/",
prueba5="https://www.fauxhammer.com"


const 
NAME=`CSS-TRIKS`,
DOMAIN=`${prueba1}`,
SITE=`${DOMAIN}/wp-json`,
API_WP=`${SITE}/wp/v2`,
PER_PAGE=9,
POSTS =  `${API_WP}/posts?_embed&per_page=${PER_PAGE}`,
POST =  `${API_WP}/posts`,
SEARCH=`${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`

let page=1;
export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    PER_PAGE,
    POSTS,
    POST,
    SEARCH,
    page
}