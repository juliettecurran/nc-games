import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Shared/Header';
import Navigation from './Components/Shared/Navigation';
import Footer from './Components/Shared/Footer';
import FeaturedReview from './Components/Featured/FeaturedReview';
import SingleReview from './Components/ReviewByID/SingleReview';
import CategoryList from './Components/Categories/CategoryList';
import NewReviewForm from './Components/Post/NewReviewForm';
import AllReviews from './Components/Reviews/AllReviews';
import Filter from './Components/Filter/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <FeaturedReview />
          </Route>
          <Route exact path='/categories'>
            <CategoryList />
          </Route>
          <Route exact path='/reviews'>
            {/*also by category? */}
            <Filter />
            <AllReviews />
          </Route>
          <Route exact path='/reviews/:review_id'>
            {/*also by category? */}
            <SingleReview />
          </Route>
          <Route exact path='/new-review'>
            <NewReviewForm />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
