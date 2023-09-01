const cloudinary = require("cloudinary");

// config
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

// upload image
exports.upload = async (req, res) => {
	console.log("req image", req.body);
	try {
		const result = await cloudinary.uploader.upload(req.body.image, {
			public_id: `${Date.now()}`,
			resource_type: "auto",
		});
		res.json({
			public_id: result.public_id,
			url: result.secure_url,
		});
	} catch (err) {
		console.log("error", err);
		res.status(400).json({ error: err });
	}
};

// remove image
exports.remove = async (req, res) => {
	let image_id = req.body.public_id;
	console.log("image id", image_id);
	await cloudinary.uploader.destroy(image_id, (result, err) => {
		if (err) return res.status(400).json({ success: false, err });
		res.json(result);
	});
};
