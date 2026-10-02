"""Create PNG and SVG QR codes for the portfolio home (Bio page)."""

from pathlib import Path

import qrcode
from qrcode.constants import ERROR_CORRECT_Q
from qrcode.image.svg import SvgPathImage


SITE_URL = "https://YOUR-GITHUB-USERNAME.github.io/engineering-timeline/"

qr = qrcode.QRCode(
    version=None,
    error_correction=ERROR_CORRECT_Q,
    box_size=12,
    border=4,
)
qr.add_data(SITE_URL)
qr.make(fit=True)

png = qr.make_image(fill_color="#0A0C10", back_color="#FFFFFF")
png.save("engineering-timeline-qr.png")

svg = qr.make_image(
    image_factory=SvgPathImage,
    fill_color="#0A0C10",
    back_color="#FFFFFF",
)
svg.save("engineering-timeline-qr.svg")

print("Created engineering-timeline-qr.png and engineering-timeline-qr.svg")
