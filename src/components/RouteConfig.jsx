import { FilmList } from "../pages/FilmList";
import { FilmDetails } from "../pages/FilmDetails";
import { SpeciesList } from "../pages/SpeciesList";
import { SpeciesDetails } from "../pages/SpeciesDetails";
import HomePage from "../pages/HomePage";
import { OrganizationsList } from "../pages/OrganizationsList";
import { OrganizationsDetails } from "../pages/OrganizationsDetails";

const routes = [
    {path: "/", element: <HomePage />},
    {path: "/films", element: <FilmList />},
    {path: "/films/:filmUid", element: <FilmDetails />},
    {path: "/species", element: <SpeciesList />},
    {path: "/species/:_id", element: <SpeciesDetails />},
    {path: "/organizations", element: <OrganizationsList />},
    {path: "/organizations/:_id", element: <OrganizationsDetails />}
];

export default routes;