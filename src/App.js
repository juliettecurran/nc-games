import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Components/Shared/Header';
import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Shared/Footer';
import FeaturedReview from './Components/Featured/FeaturedReview';
import SingleReview from './Components/ReviewByID/SingleReview';
import CategoryList from './Components/Categories/CategoryList';
import NewReviewForm from './Components/Post/NewReviewForm';
import AllReviews from './Components/Reviews/AllReviews';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <FeaturedReview />
          </Route>
          <Route exact path='/categories'>
            <CategoryList />
          </Route>
          <Route exact path='/reviews'>
            {/*also by category? */}
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
