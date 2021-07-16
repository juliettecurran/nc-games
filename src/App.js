import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Shared/Header';
import Navigation from './Components/Shared/Navigation';
import Footer from './Components/Shared/Footer';
import FeaturedReview from './Components/Featured/FeaturedReview';
import SingleReview from './Components/ReviewByID/SingleReview';
import CategoryList from './Components/Categories/CategoryList';
import NewReviewForm from './Components/Post/NewReviewForm';
import AllReviews from './Components/Reviews/AllReviews';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import '././App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Navigation setSelectedCategory={setSelectedCategory} />
        <Switch>
          <Route exact path='/'>
            <FeaturedReview />
          </Route>
          <Route exact path='/categories'>
            <CategoryList />
          </Route>
          <Route path='/reviews/category/:category_slug'>
            <AllReviews selectedCategory={selectedCategory} />
          </Route>
          <Route exact path='/reviews/:review_id'>
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
