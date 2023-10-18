
const RatingStar = ({max_star, product_rating}) => {

    // console.log('max_star : '+max_star, 'rating : '+product_rating)

    return (
        <>
            {
                (() => {
                    const rating = product_rating || null;
                    const maxRating = max_star;
                    const ratingStar = [];

                    for (let star = 0; star < Math.floor(rating); star++) {
                        ratingStar.push(<i className="ri-star-fill text-yellow-500"></i>)
                    }

                    if (rating - parseInt(rating)){
                        ratingStar.push(<i className="ri-star-half-fill text-yellow-500"></i>)
                    }

                    if (!(ratingStar.length === maxRating)) {
                        const nullRating = maxRating - ratingStar.length;

                        for (let star = 0; star < nullRating ; star++) { 
                            ratingStar.push(<i className="ri-star-fill text-gray-300"></i>)
                        }
                    }
                    return ratingStar;
                })()
            }
        </>
    );
};

export default RatingStar;