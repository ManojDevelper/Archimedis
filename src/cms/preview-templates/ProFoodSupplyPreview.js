import React from "react";
import PropTypes from "prop-types";
import { Foodsupplements } from "../../pages/Products/foodsupplements";

const ProFoodSupplyPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('foodsupliments')) {
        if (data.foodsupliments) {
            data.foodsupliments.map(foodsuplimentss => {
                foodsuplimentss.foodsuplimentscards.map(foodsuplimentscardss => {
                    var getImage = getAsset(foodsuplimentscardss.Image);
                    foodsuplimentscardss.Image = getImage.toString();
                    return foodsuplimentscardss;
                })
                return foodsuplimentss;
            })
        }
    }

    return (
        <div>
            <Foodsupplements
                foodsupliments={data.foodsupliments}
            />
        </div>
    );
};

ProFoodSupplyPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default ProFoodSupplyPreview;