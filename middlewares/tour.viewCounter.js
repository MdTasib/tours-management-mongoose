const Tour = require("../models");

// VIEW COUNTER MIDDLEWARE
const viewCounter = async (req, res, next) => {
	const { id } = req.params;
	const tour = await Tour.findById({ _id: id });

	if (tour.viewesCount || tour.viewesCount == 0) {
		await tour.set({ viewesCount: tour.viewesCount + 1 }).save();
	} else {
		await tour.set({ viewesCount: 1 }).save();
	}

	next();
};

module.exports = viewCounter;
