import { PlanetsList } from "../pages/PlanetsList";
import { PlanetDetails } from "../pages/PlanetDetails";
import { SpeciesList } from "../pages/SpeciesList";
import { SpeciesDetails } from "../pages/SpeciesDetails";
import HomePage from "../pages/HomePage";
import { PeopleList } from "../pages/PeopleList";
import { PeopleDetails } from "../pages/PeopleDetails";

const routes = [
    {path: "/", element: <HomePage />},
    {path: "/planets", element: <PlanetsList />},
    {path: "/planets/:planetUid", element: <PlanetDetails />},
    {path: "/species", element: <SpeciesList />},
    {path: "/species/:_id", element: <SpeciesDetails />},
    {path: "/characters", element: <PeopleList />},
    {path: "/characters/:_id", element: <PeopleDetails />}
];

export default routes;