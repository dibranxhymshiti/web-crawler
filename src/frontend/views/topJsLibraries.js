import React, {useState} from 'react';
import SearchInput from '../components/input/searchInput';
import CustomButton from '../components/button/customButton';
import classes from './topJsLibraries.module.css';
import Spinner from "../components/spinner/spinner";
import Card from "../components/card/card";

const TopJsLibraries = () => {
    const [title, setTitle] = useState('Search something to start scraping');
    const [search, setSearch] = useState('');
    const [libraries, setLibraries] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchLibraries = (event) => {
        event.preventDefault();
        if (search) {
            setLoading(true);
            setLibraries([]);
            setTitle('Scraping libraries. Please wait!')
            fetch(`/api/libraries?searchTerm=${search}`)
                .then(res => {
                    if (!res.ok) {
                        throw Error(res.message);
                    }
                    return res.json();
                })
                .then(libraries => {
                    setTitle('Top javascript libraries')
                    setLibraries(libraries);
                    setLoading(false);
                })
                .catch(err => {
                    setTitle('Scraping failed! Please try again.')
                    setSearch('');
                    setLoading(false);
                    setLibraries([]);
                    console.log("Error occurred in fetch: ", err)
                })
        }
    }

    const topLibraries = libraries.map((library, index) => {
        console.log('bushi')
        return <Card key={library.libraryName} data={library} position={index}/>
    })

    return (
        <>
            <h1 className={classes.title}>{title}</h1>
            <form onSubmit={searchLibraries} className={classes.search} spellCheck="false">
                <SearchInput value={search} onChange={(e) => setSearch(e.target.value)}/>
                <CustomButton type={'submit'} disabled={!search}>Scrape</CustomButton>
            </form>
            <div className={classes.cardContainer}>
                {libraries ? topLibraries : null}
            </div>
            {loading && <Spinner/>}
        </>
    );
}

export default TopJsLibraries;
