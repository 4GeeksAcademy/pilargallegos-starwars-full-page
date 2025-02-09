import { PlanetsList } from "../lists/PlanetsList";
import { PlanetDetails } from "../pages/PlanetDetails";
import { SpeciesList } from "../lists/SpeciesList";
import { SpeciesDetails } from "../pages/SpeciesDetails";
import HomePage from "../pages/HomePage";
import { PeopleList } from "../lists/PeopleList";
import { PeopleDetails } from "../pages/PeopleDetails";

const routes = [
    {path: "/", element: <HomePage />},
    {path: "/planets", element: <PlanetsList />},
    {path: "/planets/:planetUid", element: <PlanetDetails />},
    {path: "/species", element: <SpeciesList />},
    {path: "/species/:uid", element: <SpeciesDetails />},
    {path: "/people", element: <PeopleList />},
    {path: "/people/:uid", element: <PeopleDetails />}
];

export default routes;