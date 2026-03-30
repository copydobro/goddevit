#!/usr/bin/env python3
"""FnKey — Contact Threshold visual concept"""

import math, random, os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

FONT_DIR = r"D:\Business\TechStack\mws_content\.agents\skills\canvas-design\canvas-fonts"
OUT_DIR  = r"D:\Business\TechStack\mws_content\projects_and_workspaces\FnKey_Landing_Page\visual"
os.makedirs(OUT_DIR, exist_ok=True)
random.seed(42)

W, H = 1200, 1600

# ─── Palette (all RGBA) ────────────────────────────────────────────────────
BG        = (11, 12, 17, 255)
AMBER     = (245, 200, 32, 255)
AMBER_200 = (245, 200, 32, 200)
AMBER_120 = (245, 200, 32, 120)
AMBER_60  = (245, 200, 32, 60)
AMBER_30  = (245, 200, 32, 30)
AMBER_12  = (245, 200, 32, 12)
WHITE     = (232, 237, 245, 255)
WHITE_120 = (232, 237, 245, 120)
GREY      = (65, 75, 95, 180)
GREY_120  = (65, 75, 95, 120)
GREY_80   = (65, 75, 95, 80)
GRID_DOT  = (20, 22, 33, 255)
KEY_FACE  = (15, 16, 24, 255)

canvas = Image.new("RGBA", (W, H), BG)
draw   = ImageDraw.Draw(canvas)

def compose(lyr):
    global canvas, draw
    canvas = Image.alpha_composite(canvas, lyr)
    draw   = ImageDraw.Draw(canvas)

def layer():
    return Image.new("RGBA", (W, H), (0, 0, 0, 0))

def F(name, size):
    return ImageFont.truetype(os.path.join(FONT_DIR, name), size)

# ═══════════════════════════════════════════════════════════════════════════
# 1. DOT GRID
# ═══════════════════════════════════════════════════════════════════════════
for gy in range(18, H, 34):
    for gx in range(18, W, 34):
        draw.ellipse([gx-1, gy-1, gx+1, gy+1], fill=GRID_DOT)

# ═══════════════════════════════════════════════════════════════════════════
# 2. SCAN LINES
# ═══════════════════════════════════════════════════════════════════════════
sl = layer()
sd = ImageDraw.Draw(sl)
for y in range(0, H, 4):
    sd.line([(0, y), (W, y)], fill=(0, 0, 0, 10))
compose(sl)

# ═══════════════════════════════════════════════════════════════════════════
# 3. GHOSTED "HOLD" BEHIND WAVEFORM
# ═══════════════════════════════════════════════════════════════════════════
hl = layer()
hd = ImageDraw.Draw(hl)
fhold = F("Gloock-Regular.ttf", 280)
b = hd.textbbox((0, 0), "HOLD", font=fhold)
hd.text(((W - (b[2]-b[0]))//2, 460), "HOLD", font=fhold, fill=AMBER_12)
compose(hl)

# ═══════════════════════════════════════════════════════════════════════════
# Layout
# ═══════════════════════════════════════════════════════════════════════════
KY  = 200;  KW = 148;  KH = 72;  KX = W//2 - KW//2
WFY = 650;  AMP = 145
WX0 = 72;   WX1 = W - 72;  WFW = WX1 - WX0

# ═══════════════════════════════════════════════════════════════════════════
# 4. FN KEY
# ═══════════════════════════════════════════════════════════════════════════
kgl = layer()
kgd = ImageDraw.Draw(kgl)
for s in range(32, 0, -3):
    a = int(20 * ((1 - s/32)**2))
    kgd.rounded_rectangle([KX-s, KY-s, KX+KW+s, KY+KH+s], radius=12+s//3, fill=(245, 200, 32, a))
kgl = kgl.filter(ImageFilter.GaussianBlur(5))
compose(kgl)

draw.rounded_rectangle([KX, KY, KX+KW, KY+KH], radius=10, fill=KEY_FACE, outline=AMBER_200, width=2)
draw.rounded_rectangle([KX+3, KY+3, KX+KW-3, KY+18], radius=8, fill=(255, 255, 255, 7))

f_fn = F("JetBrainsMono-Bold.ttf", 34)
b = draw.textbbox((0, 0), "fn", font=f_fn)
draw.text((KX + (KW-(b[2]-b[0]))//2, KY + (KH-(b[3]-b[1]))//2), "fn", font=f_fn, fill=AMBER)

# ═══════════════════════════════════════════════════════════════════════════
# 5. macOS YELLOW DOT
# ═══════════════════════════════════════════════════════════════════════════
DCX = KX + KW + 34;  DCY = KY + KH//2
dgl = layer()
dgd = ImageDraw.Draw(dgl)
for r in range(26, 0, -1):
    a = int(55 * ((1 - r/26)**2.2))
    dgd.ellipse([DCX-r, DCY-r, DCX+r, DCY+r], fill=(245, 200, 32, a))
dgl = dgl.filter(ImageFilter.GaussianBlur(2))
compose(dgl)
draw.ellipse([DCX-7, DCY-7, DCX+7, DCY+7], fill=AMBER)
draw.ellipse([DCX-3, DCY-5, DCX-1, DCY-3], fill=(255, 252, 220, 180))

# ═══════════════════════════════════════════════════════════════════════════
# 6. CONNECTOR LINE (key → waveform)
# ═══════════════════════════════════════════════════════════════════════════
conn_y0 = KY + KH + 3
conn_y1 = WFY - AMP - 22
for cy in range(conn_y0, conn_y1):
    t = (cy - conn_y0) / max(1, conn_y1 - conn_y0)
    a = int(150 * (1 - t * 0.8))
    draw.point((W//2, cy), fill=(245, 200, 32, a))

# ═══════════════════════════════════════════════════════════════════════════
# 7. WAVEFORM
# ═══════════════════════════════════════════════════════════════════════════
def speech_env(t):
    segs = [
        (0.00, 0.04, 0.0), (0.04, 0.18, 1.0), (0.18, 0.24, 0.0),
        (0.24, 0.42, 0.9), (0.42, 0.48, 0.3), (0.48, 0.69, 0.95),
        (0.69, 0.75, 0.2), (0.75, 0.88, 0.7), (0.88, 1.00, 0.0),
    ]
    for s, e, amp in segs:
        if s <= t < e:
            lo = (t - s) / (e - s)
            att = math.sin(lo * math.pi * 0.5) if lo < 0.1 else 1.0
            dec = math.sin((1 - lo) * math.pi * 0.5) if lo > 0.9 else 1.0
            return amp * att * dec
    return 0.0

samps = []
for i in range(WFW):
    t = i / WFW
    e = speech_env(t)
    w = (0.48 * math.sin(2*math.pi*t*9.3)
       + 0.27 * math.sin(2*math.pi*t*25.1 + 0.5)
       + 0.14 * math.sin(2*math.pi*t*52.7 + 1.1)
       + 0.07 * math.sin(2*math.pi*t*116.0 + 0.7)
       + 0.03 * math.sin(2*math.pi*t*243.0 + 2.1))
    samps.append((w + (random.random()-0.5)*0.05) * e)

mx = max(abs(s) for s in samps) or 1.0
samps = [s / mx for s in samps]
pts = [(WX0 + i, WFY + int(samps[i] * AMP)) for i in range(WFW)]

for thick, alpha, blur in [(16, 14, 11), (7, 45, 4), (2, 255, 0)]:
    wl = layer()
    wd = ImageDraw.Draw(wl)
    for i in range(len(pts) - 1):
        wd.line([pts[i], pts[i+1]], fill=(245, 200, 32, alpha), width=thick)
    if blur:
        wl = wl.filter(ImageFilter.GaussianBlur(blur))
    compose(wl)

draw.line([(WX0, WFY), (WX1, WFY)], fill=AMBER_30, width=1)

# ═══════════════════════════════════════════════════════════════════════════
# 8. dB + TIME ANNOTATIONS
# ═══════════════════════════════════════════════════════════════════════════
fa  = F("DMMono-Regular.ttf", 12)
fj  = F("Jura-Light.ttf", 13)

for label, off in [("0 dB", 0), ("-6", 50), ("-12", 100), ("-20", 140)]:
    for sign in ([1] if off == 0 else [1, -1]):
        y = WFY + sign * off
        draw.line([(WX0-16, y), (WX0-6, y)], fill=GREY_120, width=1)
        b = draw.textbbox((0, 0), label, font=fa)
        draw.text((WX0 - 22 - (b[2]-b[0]), y - 6), label, font=fa, fill=(65, 75, 95, 120))

for i, lbl in enumerate(["0ms", "100ms", "200ms", "300ms", "400ms", "500ms"]):
    x = WX0 + int(i * WFW / 5)
    draw.line([(x, WFY+AMP+10), (x, WFY+AMP+20)], fill=GREY_120, width=1)
    b = draw.textbbox((0, 0), lbl, font=fa)
    draw.text((x - (b[2]-b[0])//2, WFY+AMP+24), lbl, font=fa, fill=(65, 75, 95, 115))

for ly, txt in [
    (WFY - 70, "DEEPGRAM NOVA-3"),
    (WFY + 52, "WEBSOCKET  ·  RT"),
    (WFY + 76, "54% LOWER WER"),
]:
    draw.line([(WX1+6, ly), (WX1+18, ly)], fill=GREY_80, width=1)
    draw.text((WX1+22, ly-6), txt, font=fj, fill=(65, 75, 95, 95))

# ═══════════════════════════════════════════════════════════════════════════
# 9. FREQUENCY SPECTRUM BARS
# ═══════════════════════════════════════════════════════════════════════════
BY0 = WFY + AMP + 56;  BY1 = BY0 + 54;  BN = 52;  BW = WFW // BN
for i in range(BN):
    t = i / BN
    h = (0.9 - t * 0.8) if t < 0.3 else max(0.04, 0.62 - (t-0.3)*1.15)
    h = max(0.04, min(1.0, h + (random.random()-0.5)*0.09))
    bh = int((BY1-BY0) * h)
    xb = WX0 + i * BW
    draw.rectangle([xb, BY1-bh, xb+BW-2, BY1], fill=(245, 200, 32, int(38+148*h)))

# ═══════════════════════════════════════════════════════════════════════════
# 10. HOLD → SPEAK → RELEASE TIMELINE
# ═══════════════════════════════════════════════════════════════════════════
TLY  = 1062
TLX0 = 108;  TLX1 = W - 108

draw.line([(TLX0, TLY), (TLX1, TLY)], fill=AMBER_60, width=1)

# Tick marks along timeline
for i in range(61):
    xp = TLX0 + int(i * (TLX1-TLX0) / 60)
    ht = 5 + int(3 * abs(math.sin(i * 0.42)))
    draw.line([(xp, TLY - ht//2), (xp, TLY + ht//2)], fill=AMBER_60, width=1)

f_tl_label = F("BricolageGrotesque-Bold.ttf", 17)
f_tl_sub   = F("DMMono-Regular.ttf", 12)

for i, (label, sublabel) in enumerate([
    ("HOLD",    "Fn pressed  ·  mic active"),
    ("SPEAK",   "audio streams in real time"),
    ("RELEASE", "text pasted  ·  mic off"),
]):
    x = TLX0 + int(i * (TLX1-TLX0) / 2)
    # node glow
    nl = layer()
    nd = ImageDraw.Draw(nl)
    for r in range(14, 0, -1):
        a = int(55 * ((1 - r/14)**2))
        nd.ellipse([x-r, TLY-r, x+r, TLY+r], fill=(245, 200, 32, a))
    compose(nl)
    draw.ellipse([x-5, TLY-5, x+5, TLY+5], fill=AMBER)
    # label above
    b = draw.textbbox((0, 0), label, font=f_tl_label)
    lw = b[2]-b[0]
    draw.text((x - lw//2, TLY - 40), label, font=f_tl_label, fill=AMBER_200)
    # sublabel below
    bs = draw.textbbox((0, 0), sublabel, font=f_tl_sub)
    sw = bs[2]-bs[0]
    draw.text((x - sw//2, TLY + 18), sublabel, font=f_tl_sub, fill=GREY_120)

# ═══════════════════════════════════════════════════════════════════════════
# 11. TOP BAR
# ═══════════════════════════════════════════════════════════════════════════
fcat  = F("Jura-Light.ttf", 14)
fdot  = F("DMMono-Regular.ttf", 13)
draw.text((60, 46), "AI VOICE DICTATION  ·  macOS", font=fcat, fill=(65, 75, 95, 135))

LX = W - 70;  LY = 48
ll = layer()
ld = ImageDraw.Draw(ll)
for r in range(16, 0, -1):
    a = int(40 * ((1 - r/16)**2))
    ld.ellipse([LX-r, LY-r, LX+r, LY+r], fill=(245, 200, 32, a))
compose(ll)
draw.ellipse([LX-5, LY-5, LX+5, LY+5], fill=AMBER)
draw.text((LX+12, LY-7), "LIVE", font=fdot, fill=AMBER_200)

# ═══════════════════════════════════════════════════════════════════════════
# 12. BOTTOM TEXT
# ═══════════════════════════════════════════════════════════════════════════
SEP_Y = H - 210
draw.line([(60, SEP_Y), (W-60, SEP_Y)], fill=(55, 62, 78, 75), width=1)

fb  = F("BricolageGrotesque-Bold.ttf", 46)
ft2 = F("InstrumentSans-Regular.ttf", 18)
fv  = F("Jura-Light.ttf", 13)
fdm = F("DMMono-Regular.ttf", 18)

TY = SEP_Y + 26
draw.text((60, TY), "FnKey", font=fb, fill=WHITE)
b = draw.textbbox((60, TY), "FnKey", font=fb)
draw.text((b[2]+6, TY+14), ".app", font=fdm, fill=AMBER_200)
draw.text((60, TY+62), "streaming dictation  ·  free forever  ·  open source", font=ft2, fill=WHITE_120)
draw.text((60, TY+100), "v0.4.0  ·  GPL-3.0  ·  Rust  ·  Deepgram Nova-3", font=fv, fill=(55, 62, 78, 175))

gh = "github.com/evoleinik/fnkey"
bg = draw.textbbox((0, 0), gh, font=fv)
draw.text((W - 60 - (bg[2]-bg[0]), TY+100), gh, font=fv, fill=(55, 62, 78, 135))

# ═══════════════════════════════════════════════════════════════════════════
# 13. LEFT VERTICAL LABEL
# ═══════════════════════════════════════════════════════════════════════════
try:
    fvert = F("Jura-Light.ttf", 13)
    vtxt = "SIGNAL ACTIVE"
    bv = draw.textbbox((0, 0), vtxt, font=fvert)
    vw = bv[2]-bv[0]
    tmp = Image.new("RGBA", (vw+4, 22), (0, 0, 0, 0))
    td = ImageDraw.Draw(tmp)
    td.text((0, 0), vtxt, font=fvert, fill=(55, 62, 78, 110))
    rot = tmp.rotate(90, expand=True)
    vl = layer()
    vl.paste(rot, (14, WFY - rot.size[1]//2), rot)
    compose(vl)
except Exception as e:
    print(f"Vert label: {e}")

# ═══════════════════════════════════════════════════════════════════════════
# 14. VIGNETTE (top + bottom edges)
# ═══════════════════════════════════════════════════════════════════════════
for y in range(70):
    a = int(110 * (1 - y/70))
    draw.line([(0, y), (W, y)], fill=(11, 12, 17, a))
for y in range(70):
    a = int(110 * (1 - y/70))
    draw.line([(0, H-1-y), (W, H-1-y)], fill=(11, 12, 17, a))

# ═══════════════════════════════════════════════════════════════════════════
# SAVE
# ═══════════════════════════════════════════════════════════════════════════
final = canvas.convert("RGB")
path  = os.path.join(OUT_DIR, "fnkey_visual_concept.png")
final.save(path, "PNG")
print(f"Saved: {path}")
