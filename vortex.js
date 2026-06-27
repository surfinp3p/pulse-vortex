// 画布与初始状态参数。
const MAX_DEVICE_PIXEL_RATIO = 1.25;
const FALLBACK_DEVICE_PIXEL_RATIO = 1;
const INITIAL_CENTER_X = 0.52;
const INITIAL_CENTER_Y = 0.49;
const FULL_ALPHA = 1;
const ZERO_VALUE = 0;
const FULL_CIRCLE = Math.PI * 2;
const OVERSCAN_SIZE_SCALE = 2;

// 时间推进与旋转运动参数。
const MILLISECONDS_PER_SECOND = 1000;
const DEFAULT_DELTA_SECONDS = 0.016;
const MAX_DELTA_SECONDS = 0.05;
const MIN_SPIN = 1.45;
const INITIAL_SPIN_VELOCITY = MIN_SPIN;
const MAX_SPIN = 5.6;
const CHARGE_ACCELERATION = 0.45;
const RELEASE_DECELERATION = 2.1;
const IDLE_THRESHOLD_MS = 8000;
const IDLE_BLEND_SPEED = 0.03;
const IDLE_COMPLETE_THRESHOLD = 0.95;
const IDLE_SPIN_FACTOR = 0.3;
const RELEASE_SPIN_BOOST = 3.3;
const CHARGE_SPIN_BOOST = 0.9;
const CENTER_FOLLOW_SPEED = 4.6;
const SPIN_DIRECTION_BLEND_SPEED = 0.08;

// 蓄能、释放与呼吸脉动参数。
const FULL_CHARGE_DURATION_MS = 2500;
const CHARGE_FADE_SPEED = 0.08;
const RELEASE_INTENSITY_POWER = 2;
const RELEASE_FADE_FAST = 0.052;
const RELEASE_FADE_SLOW = 0.022;
const BREATHING_TIME_SCALE = 0.001;
const BREATHING_AMPLITUDE = 0.04;
const ACTIVE_ENERGY_SCALE = 1.05;
const CHARGE_COMPRESSION_SCALE = 0.22;
const RELEASE_EXPANSION_SCALE = 0.48;
const IDLE_RADIUS_SCALE = 0.78;
const GLOW_IDLE_ALPHA = 0.38;
const GLOW_ACTIVE_ALPHA = 0.95;
const GLOW_BREATH_MIN = 0.75;
const GLOW_BREATH_MAX = 1.15;
const GLOW_BREATH_BASE = 0.96;
const GLOW_BREATH_RANGE = 0.08;
const CHARGE_GLOW_BOOST = 0.45;
const RELEASE_GLOW_BOOST = 3.8;
const MIN_GLOW_ALPHA = 0.18;
const MAX_GLOW_ALPHA = 1.25;
const IDLE_ATTRACTION_SCALE = 0.32;
const CHARGE_ATTRACTION_BOOST = 0.65;
const RELEASE_ATTRACTION_DROP = 0.85;

// 屏幕震动与释放闪光参数。
const CHARGE_SHAKE_STRENGTH = 2;
const RELEASE_SHAKE_STRENGTH = 86;
const SHAKE_X_TIME_SCALE = 0.09;
const SHAKE_Y_TIME_SCALE = 0.075;
const RELEASE_QUAKE_DECAY_LOW = 0.94;
const RELEASE_QUAKE_DECAY_HIGH = 0.986;
const RELEASE_QUAKE_X_TIME_SCALE = 0.14;
const RELEASE_QUAKE_Y_TIME_SCALE = 0.113;
const RELEASE_QUAKE_Y_SCALE = 1.05;
const RELEASE_QUAKE_MIN_AMPLITUDE = 0.02;
const FRAME_RATE_BASE = 60;
const DRAW_OVERSCAN = 24;
const RELEASE_FLASH_THRESHOLD = 0.03;
const RELEASE_FLASH_MAX_ALPHA = 0.3;
const RELEASE_FLASH_ALPHA_SCALE = 0.4;

// 背景渐变与静置暗化参数。
const BACKGROUND_TOP_COLOR = "#fbcacb";
const BACKGROUND_BOTTOM_COLOR = "#f79697";
const IDLE_SHADOW_COLOR = "#170910";
const IDLE_SHADOW_ALPHA_SCALE = 0.72;
const RELEASE_SHADOW_ERASE_SCALE = 0.22;
const OUTER_RADIUS_SCALE = 1.08;

// 背景网格扭曲参数。
const GRID_BASE_ALPHA = 0.16;
const GRID_IDLE_ALPHA = 0.045;
const CHARGE_GRID_ALPHA_BOOST = 0.8;
const RELEASE_GRID_ALPHA_BOOST = 2.8;
const GRID_LINE_WIDTH = 1;
const MIN_GRID_GAP = 54;
const GRID_SCREEN_SCALE = 0.075;
const GRID_BASE_WARP = 0.05;
const CHARGE_GRID_WARP = 0.18;
const RELEASE_GRID_WARP = 0.08;
const HALF_SCREEN_FACTOR = 0.5;

// 漩涡螺旋光带绘制参数。
const SPIRAL_STEP_COUNT = 420;
const SPIRAL_STEP_INCREMENT = 1;
const SPIRAL_IDLE_STEP_INCREMENT = 1;
const SPIRAL_RADIUS_POWER = 1.16;
const SPIRAL_TURN_MULTIPLIER = 14.6;
const SPIRAL_WAVE_FREQUENCY = 20;
const SPIRAL_PHASE_WAVE_SCALE = 4.2;
const SPIRAL_Y_SCALE = 0.86;
const BRIGHT_SPIRAL_BLUR_ACTIVE = 7;
const BRIGHT_SPIRAL_BLUR_IDLE = 10;
const DARK_SPIRAL_BLUR_ACTIVE = 2;
const DARK_SPIRAL_BLUR_IDLE = 4;
const BRIGHT_SPIRAL_BANDS = [
  { start: 0.2, widthScale: 0.052, color: "rgba(255,255,255,.92)", alpha: 0.92, phaseScale: 1 },
  { start: 2.3, widthScale: 0.044, color: "rgba(255,255,255,.72)", alpha: 0.72, phaseScale: 0.92 },
  { start: 4.2, widthScale: 0.036, color: "rgba(255,228,229,.7)", alpha: 0.66, phaseScale: 1.08 }
];
const DARK_SPIRAL_BANDS = [
  { start: 1.2, widthScale: 0.038, color: "rgba(126,58,58,.42)", activeAlpha: 0.54, idleAlpha: 0.82, phaseScale: 0.84 },
  { start: 3.4, widthScale: 0.03, color: "rgba(126,58,58,.34)", activeAlpha: 0.42, idleAlpha: 0.7, phaseScale: 1.16 }
];

// 柔和内层环纹理参数。
const RING_COUNT_ACTIVE = 16;
const RING_COUNT_IDLE = 14;
const RING_IDLE_STEP_INCREMENT = 1;
const RING_RADIUS_START = 0.03;
const RING_RADIUS_STEP = 0.017;
const RING_Y_SCALE = 0.84;
const RING_ROTATION_SCALE = 0.34;
const RING_ROTATION_OFFSET = 0.2;
const RING_ALPHA_SCALE = 0.16;
const RING_LINE_WIDTH_ACTIVE = 1.2;
const RING_LINE_WIDTH_IDLE = 0.7;

// 中心能量脉冲参数。
const CORE_PULSE_THRESHOLD = 0.82;
const CORE_PULSE_RANGE = 0.18;
const CORE_PULSE_BREATH_BASE = 0.5;
const CORE_PULSE_BREATH_SCALE = 0.5;
const CORE_PULSE_TIME_SCALE = 0.012;
const CORE_PULSE_RADIUS_START = 0.14;
const CORE_PULSE_RADIUS_END = 0.1;
const CORE_PULSE_BASE_ALPHA = 0.34;
const CORE_PULSE_CHARGE_ALPHA = 0.38;
const CORE_PULSE_BREATH_ALPHA = 0.08;
const CORE_PULSE_MAX_ALPHA = 0.86;
const CORE_PULSE_HALO_BASE_ALPHA = 0.12;
const CORE_PULSE_HALO_CHARGE_ALPHA = 0.16;
const CORE_PULSE_HALO_BREATH_ALPHA = 0.04;
const CORE_PULSE_HALO_MAX_ALPHA = 0.34;
const CORE_PULSE_MID_STOP = 0.42;
const CORE_PULSE_OUTER_STOP = 0.72;
const CORE_PULSE_OUTER_ALPHA_SCALE = 0.45;

// 中心发光与压缩核心参数。
const CENTER_GLOW_RADIUS_SCALE = 0.36;
const CENTER_GLOW_MID_STOP = 0.42;
const CENTER_GLOW_CENTER_ALPHA = 0.32;
const CENTER_GLOW_MID_ALPHA = 0.12;
const COMPRESSED_CORE_THRESHOLD = 0.72;
const RELEASE_CORE_THRESHOLD = 0.05;
const COMPRESSED_CORE_RADIUS_SCALE = 0.12;
const COMPRESSED_CORE_MID_STOP = 0.36;
const COMPRESSED_CORE_CHARGE_ALPHA = 0.72;
const COMPRESSED_CORE_RELEASE_ALPHA = 0.9;
const COMPRESSED_CORE_MID_CHARGE_ALPHA = 0.28;
const COMPRESSED_CORE_MID_RELEASE_ALPHA = 0.45;

// 蓄能压暗层参数。
const CHARGE_SHADE_THRESHOLD = 0.05;
const CHARGE_SHADE_INNER_RADIUS_SCALE = 0.08;
const CHARGE_SHADE_OUTER_RADIUS_SCALE = 0.85;
const CHARGE_SHADE_MID_STOP = 0.45;
const CHARGE_SHADE_MID_ALPHA = 0.12;
const CHARGE_SHADE_EDGE_ALPHA = 0.38;

// 释放冲击波参数。
const RELEASE_TRIGGER_THRESHOLD = 0.08;
const SHOCKWAVE_COUNT = 4;
const SHOCKWAVE_MAX_ACTIVE = 6;
const SHOCKWAVE_RADIUS_STEP = 24;
const SHOCKWAVE_ALPHA_SCALE = 1.28;
const SHOCKWAVE_ALPHA_DROP = 0.15;
const SHOCKWAVE_BASE_SPEED = 36;
const SHOCKWAVE_INTENSITY_SPEED = 118;
const SHOCKWAVE_INDEX_SPEED = 13;
const SHOCKWAVE_BASE_WIDTH = 8;
const SHOCKWAVE_INTENSITY_WIDTH = 52;
const SHOCKWAVE_INDEX_WIDTH_DROP = 4;
const SHOCKWAVE_ALPHA_DECAY = 0.935;
const SHOCKWAVE_MIN_ALPHA = 0.02;
const SHOCKWAVE_Y_SCALE = 0.84;
const SHOCKWAVE_INNER_HALO_WIDTH = 2;
const SHOCKWAVE_OUTER_HALO_WIDTH = 3;
const SHOCKWAVE_HALO_MID_STOP = 0.5;
const SHOCKWAVE_HALO_ALPHA_SCALE = 0.22;

// 最终边缘暗角参数。
const SHADE_INNER_RADIUS_SCALE = 0.12;
const SHADE_OUTER_RADIUS_SCALE = 0.9;
const SHADE_FIRST_STOP = 0.48;
const SHADE_SECOND_STOP = 0.72;
const SHADE_IDLE_DARK_ALPHA = 0.22;
const SHADE_ACTIVE_ALPHA = 0.1;
const SHADE_IDLE_ALPHA = 0.28;
const SHADE_EDGE_ACTIVE_ALPHA = 0.24;
const SHADE_EDGE_IDLE_ALPHA = 0.52;

// 指针交互参数。
const PRIMARY_POINTER_BUTTON = 0;
const SECONDARY_POINTER_BUTTON = 2;
const SPACE_KEY_CODE = "Space";
const POINTER_MIN_X = 0.14;
const POINTER_MAX_X = 0.86;
const POINTER_MIN_Y = 0.16;
const POINTER_MAX_Y = 0.84;

// 颜色常量。
const COLOR_WHITE = "#fff";
const RGB_WHITE = "255,255,255";
const RGB_CORE_PULSE_MID = "255,238,241";
const RGB_CORE_PULSE_OUTER = "255,210,218";
const RGB_COMPRESSED_CORE_MID = "255,235,236";
const RGB_CHARGE_SHADE_CENTER = "60,10,25";
const RGB_CHARGE_SHADE_MID = "90,20,35";
const RGB_CHARGE_SHADE_EDGE = "80,12,30";
const RGB_SHADE_RED = "104,35,35";
const RGB_SHADE_DARK = "24,8,16";

const canvas = document.getElementById("vortexCanvas");
const ctx = canvas.getContext("2d");
const introOverlay = document.getElementById("introOverlay");
const vortexCredit = document.getElementById("vortexCredit");

let dpr = Math.min(MAX_DEVICE_PIXEL_RATIO, window.devicePixelRatio || FALLBACK_DEVICE_PIXEL_RATIO); // 当前设备像素比，用于高清屏适配。
let width = window.innerWidth; // 画布显示宽度。
let height = window.innerHeight; // 画布显示高度。
let spin = ZERO_VALUE; // 漩涡当前旋转相位。
let spinVelocity = INITIAL_SPIN_VELOCITY; // 漩涡当前旋转速度。
let spinDirection = FULL_ALPHA; // 漩涡当前旋转方向，1 为默认方向，-1 为反方向。
let targetSpinDirection = FULL_ALPHA; // 目标旋转方向，用于让方向切换更平滑。
let pressing = false; // 指针是否处于按下状态。
let isPressed = false; // 是否正在蓄能，用于驱动蓄能动画。
let pressStartTime = ZERO_VALUE; // 本次按下开始时间。
let chargePower = ZERO_VALUE; // 当前蓄能强度，范围约为 0 到 1。
let releasePower = ZERO_VALUE; // 释放后的残余能量强度，用于闪光、震动和冲击效果。
let currentReleaseIntensity = ZERO_VALUE; // 当前释放强度，由蓄能值非线性映射得到，用于统一控制释放反馈层级。
let releaseShakeAmplitude = ZERO_VALUE; // 释放后的独立余震强度，叠加在漩涡中心位置上。
let shockwaves = []; // 释放时生成的冲击波列表。
let lastFrameTime = ZERO_VALUE; // 上一帧时间戳，用于计算帧间隔。
let vortexCenter = { x: INITIAL_CENTER_X, y: INITIAL_CENTER_Y }; // 漩涡当前中心位置，使用屏幕比例坐标。
let targetCenter = { x: INITIAL_CENTER_X, y: INITIAL_CENTER_Y }; // 指针指向的目标中心位置。
let lastMouseMoveTime = performance.now(); // 最近一次指针移动时间，用于判断静置状态。
let isIdle = false; // 当前是否进入静置休眠状态。
let idleFactor = FULL_ALPHA; // 静置状态过渡系数，用于平滑变暗和减速。
let breathingFactor = FULL_ALPHA; // 全局呼吸脉动系数，影响半径、光晕和吸引强度。
let isManuallyPaused = true; // 是否处于手动强制休眠状态，初始为 true 以降低页面刚打开时的视觉冲击。

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function rgba(rgb, alpha) {
  return `rgba(${rgb},${alpha})`;
}

// 启动引导层模块：休眠时显示中央序章，运行时转化为左下角 HUD。
function updateIntroOverlay() {
  if (!introOverlay) {
    return;
  }

  introOverlay.classList.toggle("is-intro", isManuallyPaused);
  introOverlay.classList.toggle("is-hud", !isManuallyPaused);
  introOverlay.classList.toggle("is-hud-dimmed", !isManuallyPaused && (isPressed || pressing));

  if (vortexCredit) {
    vortexCredit.classList.toggle("is-visible", isManuallyPaused);
  }
}

// 手动休眠模块：通过空格键切换强制休眠，并清除蓄能与释放残留。
function toggleManualPause() {
  isManuallyPaused = !isManuallyPaused;

  if (isManuallyPaused) {
    isPressed = false;
    pressing = false;
    chargePower = ZERO_VALUE;
    releasePower = ZERO_VALUE;
    currentReleaseIntensity = ZERO_VALUE;
    releaseShakeAmplitude = ZERO_VALUE;
    shockwaves = [];
  } else {
    lastMouseMoveTime = performance.now();
  }

  updateIntroOverlay();
}

// 蓄能启动模块：统一处理左右键和组合键触发的蓄能入口。
function startCharge(direction) {
  targetSpinDirection = direction;
  pressing = true;
  isPressed = true;
  pressStartTime = performance.now();
  lastMouseMoveTime = pressStartTime;
  updateIntroOverlay();
}

// 尺寸适配模块：让 Canvas 在高分辨率屏幕上保持清晰。
function resize() {
  dpr = Math.min(MAX_DEVICE_PIXEL_RATIO, window.devicePixelRatio || FALLBACK_DEVICE_PIXEL_RATIO);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, ZERO_VALUE, ZERO_VALUE, dpr, ZERO_VALUE, ZERO_VALUE);
}

// 螺旋光带模块：绘制漩涡中的一条弯曲光带。
function drawSpiralBand(cx, cy, maxRadius, start, widthScale, color, alpha, phase, stepIncrement) {
  ctx.beginPath();
  for (let step = ZERO_VALUE; step <= SPIRAL_STEP_COUNT; step += stepIncrement) {
    const t = step / SPIRAL_STEP_COUNT;
    const radius = maxRadius * Math.pow(t, SPIRAL_RADIUS_POWER);
    const turn = start + t * Math.PI * SPIRAL_TURN_MULTIPLIER + phase;
    const wave = Math.sin(t * SPIRAL_WAVE_FREQUENCY + phase * SPIRAL_PHASE_WAVE_SCALE + start) * widthScale;
    const x = cx + Math.cos(turn) * (radius + wave);
    const y = cy + Math.sin(turn) * (radius + wave) * SPIRAL_Y_SCALE;

    if (step === ZERO_VALUE) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.strokeStyle = color;
  ctx.globalAlpha = alpha;
  ctx.lineWidth = widthScale;
  ctx.lineCap = "round";
  ctx.stroke();
}

// 背景模块：绘制柔和粉色底色和静置时的暗化层。
function drawBackground(idleAmount, releaseAmount) {
  const background = ctx.createLinearGradient(ZERO_VALUE, ZERO_VALUE, ZERO_VALUE, height);

  background.addColorStop(ZERO_VALUE, BACKGROUND_TOP_COLOR);
  background.addColorStop(FULL_ALPHA, BACKGROUND_BOTTOM_COLOR);

  ctx.globalAlpha = FULL_ALPHA;
  ctx.fillStyle = background;
  ctx.fillRect(-DRAW_OVERSCAN, -DRAW_OVERSCAN, width + DRAW_OVERSCAN * OVERSCAN_SIZE_SCALE, height + DRAW_OVERSCAN * OVERSCAN_SIZE_SCALE);

  ctx.save();
  ctx.globalCompositeOperation = "multiply";
  ctx.globalAlpha = clamp(idleAmount * IDLE_SHADOW_ALPHA_SCALE - releaseAmount * RELEASE_SHADOW_ERASE_SCALE, ZERO_VALUE, FULL_ALPHA);
  ctx.fillStyle = IDLE_SHADOW_COLOR;
  ctx.fillRect(ZERO_VALUE, ZERO_VALUE, width, height);
  ctx.restore();
}

// 释放闪光模块：在蓄能释放后绘制短暂的全屏闪光。
function drawReleaseFlash(releaseAmount) {
  if (releaseAmount <= RELEASE_FLASH_THRESHOLD) {
    return;
  }

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.globalAlpha = Math.min(RELEASE_FLASH_MAX_ALPHA, releaseAmount * RELEASE_FLASH_ALPHA_SCALE);
  ctx.fillStyle = COLOR_WHITE;
  ctx.fillRect(-DRAW_OVERSCAN, -DRAW_OVERSCAN, width + DRAW_OVERSCAN * OVERSCAN_SIZE_SCALE, height + DRAW_OVERSCAN * OVERSCAN_SIZE_SCALE);
  ctx.restore();
}

// 网格模块：让背景网格向漩涡中心发生轻微扭曲。
function drawWarpedGrid(cx, cy, gridAlpha, chargeAmount, releaseAmount) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.strokeStyle = rgba(RGB_WHITE, gridAlpha);
  ctx.lineWidth = GRID_LINE_WIDTH;

  const gridGap = Math.max(MIN_GRID_GAP, Math.min(width, height) * GRID_SCREEN_SCALE);
  const gridWarp = GRID_BASE_WARP + chargeAmount * CHARGE_GRID_WARP + releaseAmount * RELEASE_GRID_WARP;

  for (let x = (cx % gridGap) - gridGap; x < width + gridGap; x += gridGap) {
    ctx.beginPath();
    ctx.moveTo(x, ZERO_VALUE);
    ctx.lineTo(x + (cy - height * HALF_SCREEN_FACTOR) * gridWarp, height);
    ctx.stroke();
  }

  for (let y = (cy % gridGap) - gridGap; y < height + gridGap; y += gridGap) {
    ctx.beginPath();
    ctx.moveTo(ZERO_VALUE, y);
    ctx.lineTo(width, y + (cx - width * HALF_SCREEN_FACTOR) * gridWarp);
    ctx.stroke();
  }

  ctx.restore();
}

// 漩涡主体模块：叠加明亮和暗色螺旋层，形成主体旋转感。
function drawVortexBody(cx, cy, maxRadius, attractionStrength, glowAlpha, idleAmount, spiralStepIncrement) {
  ctx.save();
  ctx.filter = `blur(${lerp(BRIGHT_SPIRAL_BLUR_ACTIVE, BRIGHT_SPIRAL_BLUR_IDLE, idleAmount)}px)`;
  ctx.globalCompositeOperation = "screen";
  BRIGHT_SPIRAL_BANDS.forEach((band) => {
    drawSpiralBand(
      cx,
      cy,
      maxRadius,
      band.start,
      maxRadius * band.widthScale * attractionStrength,
      band.color,
      band.alpha * glowAlpha,
      spin * band.phaseScale,
      spiralStepIncrement
    );
  });
  ctx.restore();

  ctx.save();
  ctx.filter = `blur(${lerp(DARK_SPIRAL_BLUR_ACTIVE, DARK_SPIRAL_BLUR_IDLE, idleAmount)}px)`;
  ctx.globalCompositeOperation = "multiply";
  DARK_SPIRAL_BANDS.forEach((band) => {
    drawSpiralBand(
      cx,
      cy,
      maxRadius,
      band.start,
      maxRadius * band.widthScale,
      band.color,
      lerp(band.activeAlpha, band.idleAlpha, idleAmount),
      spin * band.phaseScale,
      spiralStepIncrement
    );
  });
  ctx.restore();
}

// 内层纹理模块：添加柔和的内部轨道纹理，不作为蓄能提示。
function drawInnerRingTexture(cx, cy, maxRadius, glowAlpha, idleAmount, ringStepIncrement) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";

  const ringCount = Math.round(lerp(RING_COUNT_ACTIVE, RING_COUNT_IDLE, idleAmount));
  for (let i = ZERO_VALUE; i < ringCount; i += ringStepIncrement) {
    const radius = maxRadius * (RING_RADIUS_START + i * RING_RADIUS_STEP);
    ctx.beginPath();
    ctx.ellipse(cx, cy, radius, radius * RING_Y_SCALE, spin * RING_ROTATION_SCALE + i * RING_ROTATION_OFFSET, ZERO_VALUE, FULL_CIRCLE);
    ctx.strokeStyle = rgba(RGB_WHITE, RING_ALPHA_SCALE * glowAlpha);
    ctx.lineWidth = lerp(RING_LINE_WIDTH_ACTIVE, RING_LINE_WIDTH_IDLE, idleAmount);
    ctx.stroke();
  }

  ctx.restore();
}

// 核心脉冲模块：用柔和的中心压缩光效替代几何蓄能环。
function drawCoreEnergyPulse(cx, cy, maxRadius, chargeAmount, time) {
  if (chargeAmount <= CORE_PULSE_THRESHOLD) {
    return;
  }

  const pulseAmount = (chargeAmount - CORE_PULSE_THRESHOLD) / CORE_PULSE_RANGE;
  const pulseBreath = CORE_PULSE_BREATH_BASE + Math.sin(time * CORE_PULSE_TIME_SCALE) * CORE_PULSE_BREATH_SCALE;
  const pulseRadius = maxRadius * lerp(CORE_PULSE_RADIUS_START, CORE_PULSE_RADIUS_END, pulseAmount);
  const pulseCoreAlpha = clamp(
    CORE_PULSE_BASE_ALPHA + chargeAmount * CORE_PULSE_CHARGE_ALPHA + pulseBreath * CORE_PULSE_BREATH_ALPHA,
    ZERO_VALUE,
    CORE_PULSE_MAX_ALPHA
  );
  const pulseHaloAlpha = clamp(
    CORE_PULSE_HALO_BASE_ALPHA + chargeAmount * CORE_PULSE_HALO_CHARGE_ALPHA + pulseBreath * CORE_PULSE_HALO_BREATH_ALPHA,
    ZERO_VALUE,
    CORE_PULSE_HALO_MAX_ALPHA
  );
  const corePulse = ctx.createRadialGradient(cx, cy, ZERO_VALUE, cx, cy, pulseRadius);

  corePulse.addColorStop(ZERO_VALUE, rgba(RGB_WHITE, pulseCoreAlpha));
  corePulse.addColorStop(CORE_PULSE_MID_STOP, rgba(RGB_CORE_PULSE_MID, pulseHaloAlpha));
  corePulse.addColorStop(CORE_PULSE_OUTER_STOP, rgba(RGB_CORE_PULSE_OUTER, pulseHaloAlpha * CORE_PULSE_OUTER_ALPHA_SCALE));
  corePulse.addColorStop(FULL_ALPHA, rgba(RGB_WHITE, ZERO_VALUE));

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.fillStyle = corePulse;
  ctx.fillRect(ZERO_VALUE, ZERO_VALUE, width, height);
  ctx.restore();
}

// 中心发光模块：融合常驻核心光晕和高能压缩核心。
function drawCenterGlow(cx, cy, maxRadius, glowAlpha, chargeAmount, releaseAmount) {
  const centerGlow = ctx.createRadialGradient(cx, cy, ZERO_VALUE, cx, cy, maxRadius * CENTER_GLOW_RADIUS_SCALE);
  centerGlow.addColorStop(ZERO_VALUE, rgba(RGB_WHITE, CENTER_GLOW_CENTER_ALPHA * glowAlpha));
  centerGlow.addColorStop(CENTER_GLOW_MID_STOP, rgba(RGB_COMPRESSED_CORE_MID, CENTER_GLOW_MID_ALPHA * glowAlpha));
  centerGlow.addColorStop(FULL_ALPHA, rgba(RGB_WHITE, ZERO_VALUE));
  ctx.fillStyle = centerGlow;
  ctx.fillRect(ZERO_VALUE, ZERO_VALUE, width, height);

  if (chargeAmount <= COMPRESSED_CORE_THRESHOLD && releaseAmount <= RELEASE_CORE_THRESHOLD) {
    return;
  }

  const core = ctx.createRadialGradient(cx, cy, ZERO_VALUE, cx, cy, maxRadius * COMPRESSED_CORE_RADIUS_SCALE);
  core.addColorStop(ZERO_VALUE, rgba(RGB_WHITE, COMPRESSED_CORE_CHARGE_ALPHA * chargeAmount + COMPRESSED_CORE_RELEASE_ALPHA * releaseAmount));
  core.addColorStop(
    COMPRESSED_CORE_MID_STOP,
    rgba(RGB_COMPRESSED_CORE_MID, COMPRESSED_CORE_MID_CHARGE_ALPHA * chargeAmount + COMPRESSED_CORE_MID_RELEASE_ALPHA * releaseAmount)
  );
  core.addColorStop(FULL_ALPHA, rgba(RGB_WHITE, ZERO_VALUE));
  ctx.fillStyle = core;
  ctx.fillRect(ZERO_VALUE, ZERO_VALUE, width, height);
}

// 蓄能压暗模块：按住蓄能时压暗外围，让中心压缩感更明显。
function drawChargeCompressionShade(cx, cy, maxRadius, chargeAmount) {
  if (chargeAmount <= CHARGE_SHADE_THRESHOLD) {
    return;
  }

  const chargeShade = ctx.createRadialGradient(
    cx,
    cy,
    maxRadius * CHARGE_SHADE_INNER_RADIUS_SCALE,
    cx,
    cy,
    maxRadius * CHARGE_SHADE_OUTER_RADIUS_SCALE
  );

  chargeShade.addColorStop(ZERO_VALUE, rgba(RGB_CHARGE_SHADE_CENTER, ZERO_VALUE));
  chargeShade.addColorStop(CHARGE_SHADE_MID_STOP, rgba(RGB_CHARGE_SHADE_MID, CHARGE_SHADE_MID_ALPHA * chargeAmount));
  chargeShade.addColorStop(FULL_ALPHA, rgba(RGB_CHARGE_SHADE_EDGE, CHARGE_SHADE_EDGE_ALPHA * chargeAmount));

  ctx.save();
  ctx.globalCompositeOperation = "multiply";
  ctx.fillStyle = chargeShade;
  ctx.fillRect(ZERO_VALUE, ZERO_VALUE, width, height);
  ctx.restore();
}

// 冲击波模块：更新并绘制指针松开后的扩散冲击波。
function drawShockwaves() {
  shockwaves.forEach((wave) => {
    wave.radius += wave.speed;
    wave.alpha *= SHOCKWAVE_ALPHA_DECAY;

    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.strokeStyle = rgba(RGB_WHITE, wave.alpha);
    ctx.lineWidth = wave.width;
    ctx.beginPath();
    ctx.ellipse(wave.x, wave.y, wave.radius, wave.radius * SHOCKWAVE_Y_SCALE, ZERO_VALUE, ZERO_VALUE, FULL_CIRCLE);
    ctx.stroke();

    const halo = ctx.createRadialGradient(
      wave.x,
      wave.y,
      Math.max(ZERO_VALUE, wave.radius - wave.width * SHOCKWAVE_INNER_HALO_WIDTH),
      wave.x,
      wave.y,
      wave.radius + wave.width * SHOCKWAVE_OUTER_HALO_WIDTH
    );
    halo.addColorStop(ZERO_VALUE, rgba(RGB_WHITE, ZERO_VALUE));
    halo.addColorStop(SHOCKWAVE_HALO_MID_STOP, rgba(RGB_WHITE, wave.alpha * SHOCKWAVE_HALO_ALPHA_SCALE));
    halo.addColorStop(FULL_ALPHA, rgba(RGB_WHITE, ZERO_VALUE));
    ctx.fillStyle = halo;
    ctx.fillRect(ZERO_VALUE, ZERO_VALUE, width, height);
    ctx.restore();
  });

  shockwaves = shockwaves.filter((wave) => wave.alpha > SHOCKWAVE_MIN_ALPHA);
}

// 边缘暗角模块：压暗画面外侧，引导视线集中到漩涡中心。
function drawOuterShade(cx, cy, maxRadius, idleAmount) {
  const shade = ctx.createRadialGradient(cx, cy, maxRadius * SHADE_INNER_RADIUS_SCALE, cx, cy, maxRadius * SHADE_OUTER_RADIUS_SCALE);
  shade.addColorStop(ZERO_VALUE, rgba(RGB_SHADE_RED, ZERO_VALUE));
  shade.addColorStop(SHADE_FIRST_STOP, rgba(RGB_SHADE_DARK, idleAmount * SHADE_IDLE_DARK_ALPHA));
  shade.addColorStop(SHADE_SECOND_STOP, rgba(RGB_SHADE_RED, lerp(SHADE_ACTIVE_ALPHA, SHADE_IDLE_ALPHA, idleAmount)));
  shade.addColorStop(FULL_ALPHA, rgba(RGB_SHADE_RED, lerp(SHADE_EDGE_ACTIVE_ALPHA, SHADE_EDGE_IDLE_ALPHA, idleAmount)));
  ctx.fillStyle = shade;
  ctx.fillRect(ZERO_VALUE, ZERO_VALUE, width, height);
}

// 主动画模块：更新动画状态，并按层级顺序绘制所有视觉元素。
function draw(time = ZERO_VALUE) {
  const delta = lastFrameTime ? Math.min(MAX_DELTA_SECONDS, (time - lastFrameTime) / MILLISECONDS_PER_SECOND) : DEFAULT_DELTA_SECONDS;
  const now = performance.now();

  breathingFactor = FULL_ALPHA + Math.sin(time * BREATHING_TIME_SCALE) * BREATHING_AMPLITUDE;
  const idleProgress = clamp((now - lastMouseMoveTime) / IDLE_THRESHOLD_MS, ZERO_VALUE, FULL_ALPHA);
  const targetIdleFactor = isManuallyPaused ? FULL_ALPHA : isPressed ? ZERO_VALUE : idleProgress;
  idleFactor = lerp(idleFactor, targetIdleFactor, IDLE_BLEND_SPEED);
  isIdle = idleFactor > IDLE_COMPLETE_THRESHOLD;

  if (isPressed) {
    chargePower = clamp((now - pressStartTime) / FULL_CHARGE_DURATION_MS, ZERO_VALUE, FULL_ALPHA);
  } else {
    chargePower = lerp(chargePower, ZERO_VALUE, CHARGE_FADE_SPEED);
  }
  const releaseFadeSpeed = lerp(RELEASE_FADE_FAST, RELEASE_FADE_SLOW, currentReleaseIntensity);
  releasePower = lerp(releasePower, ZERO_VALUE, releaseFadeSpeed);
  if (releasePower < RELEASE_FLASH_THRESHOLD) {
    currentReleaseIntensity = ZERO_VALUE;
  }

  const idleSpin = MIN_SPIN * IDLE_SPIN_FACTOR;
  const baseSpin = lerp(MIN_SPIN, idleSpin, idleFactor);
  const targetSpin = isPressed ? MAX_SPIN + chargePower * CHARGE_SPIN_BOOST : baseSpin + releasePower * RELEASE_SPIN_BOOST;
  const easing = isPressed ? CHARGE_ACCELERATION : RELEASE_DECELERATION;
  const energyFactor = isPressed ? ACTIVE_ENERGY_SCALE : FULL_ALPHA;
  const compressionFactor = FULL_ALPHA - chargePower * CHARGE_COMPRESSION_SCALE + releasePower * RELEASE_EXPANSION_SCALE;
  const radiusFactor = breathingFactor * lerp(FULL_ALPHA, IDLE_RADIUS_SCALE, idleFactor) * energyFactor * compressionFactor;
  const glowAlpha = clamp(
    lerp(GLOW_ACTIVE_ALPHA, GLOW_IDLE_ALPHA, idleFactor) *
    lerp(GLOW_BREATH_MIN, GLOW_BREATH_MAX, (breathingFactor - GLOW_BREATH_BASE) / GLOW_BREATH_RANGE) *
    (FULL_ALPHA + chargePower * CHARGE_GLOW_BOOST + releasePower * RELEASE_GLOW_BOOST),
    MIN_GLOW_ALPHA,
    MAX_GLOW_ALPHA
  );
  const attractionStrength = lerp(FULL_ALPHA, IDLE_ATTRACTION_SCALE, idleFactor) *
    breathingFactor *
    (FULL_ALPHA + chargePower * CHARGE_ATTRACTION_BOOST - releasePower * RELEASE_ATTRACTION_DROP);
  const gridAlpha = lerp(GRID_BASE_ALPHA, GRID_IDLE_ALPHA, idleFactor) *
    (FULL_ALPHA + chargePower * CHARGE_GRID_ALPHA_BOOST + releasePower * RELEASE_GRID_ALPHA_BOOST);
  const isHighEnergyFrame = isPressed || chargePower > CHARGE_SHADE_THRESHOLD || releasePower > RELEASE_FLASH_THRESHOLD;
  const spiralStepIncrement = idleFactor > HALF_SCREEN_FACTOR && !isHighEnergyFrame ? SPIRAL_IDLE_STEP_INCREMENT : SPIRAL_STEP_INCREMENT;
  const ringStepIncrement = idleFactor > HALF_SCREEN_FACTOR && !isHighEnergyFrame ? RING_IDLE_STEP_INCREMENT : SPIRAL_STEP_INCREMENT;

  spinDirection = lerp(spinDirection, targetSpinDirection, SPIN_DIRECTION_BLEND_SPEED);
  spinVelocity += (targetSpin - spinVelocity) * clamp(delta * easing, ZERO_VALUE, FULL_ALPHA);
  spin += spinVelocity * spinDirection * delta;
  vortexCenter.x += (targetCenter.x - vortexCenter.x) * clamp(delta * CENTER_FOLLOW_SPEED, ZERO_VALUE, FULL_ALPHA);
  vortexCenter.y += (targetCenter.y - vortexCenter.y) * clamp(delta * CENTER_FOLLOW_SPEED, ZERO_VALUE, FULL_ALPHA);
  lastFrameTime = time;

  const releaseQuakeDecay = lerp(RELEASE_QUAKE_DECAY_LOW, RELEASE_QUAKE_DECAY_HIGH, currentReleaseIntensity);
  releaseShakeAmplitude *= Math.pow(releaseQuakeDecay, delta * FRAME_RATE_BASE);
  if (releaseShakeAmplitude < RELEASE_QUAKE_MIN_AMPLITUDE) {
    releaseShakeAmplitude = ZERO_VALUE;
  }

  const baseCx = width * vortexCenter.x;
  const baseCy = height * vortexCenter.y;
  const releaseShakeOffsetX = Math.sin(time * RELEASE_QUAKE_X_TIME_SCALE) * releaseShakeAmplitude;
  const releaseShakeOffsetY = Math.cos(time * RELEASE_QUAKE_Y_TIME_SCALE) * releaseShakeAmplitude * RELEASE_QUAKE_Y_SCALE;
  const cx = baseCx + releaseShakeOffsetX;
  const cy = baseCy + releaseShakeOffsetY;
  const screenShake = chargePower * CHARGE_SHAKE_STRENGTH;
  const shakeX = Math.sin(time * SHAKE_X_TIME_SCALE) * screenShake;
  const shakeY = Math.cos(time * SHAKE_Y_TIME_SCALE) * screenShake;
  const maxRadius = Math.max(
    Math.hypot(cx, cy),
    Math.hypot(width - cx, cy),
    Math.hypot(cx, height - cy),
    Math.hypot(width - cx, height - cy)
  ) * OUTER_RADIUS_SCALE * radiusFactor;

  ctx.save();
  ctx.translate(shakeX, shakeY);

  drawBackground(idleFactor, releasePower);
  drawReleaseFlash(releasePower);
  drawWarpedGrid(cx, cy, gridAlpha, chargePower, releasePower);
  drawVortexBody(cx, cy, maxRadius, attractionStrength, glowAlpha, idleFactor, spiralStepIncrement);
  drawInnerRingTexture(cx, cy, maxRadius, glowAlpha, idleFactor, ringStepIncrement);
  drawCoreEnergyPulse(cx, cy, maxRadius, chargePower, time);
  drawCenterGlow(cx, cy, maxRadius, glowAlpha, chargePower, releasePower);
  drawChargeCompressionShade(cx, cy, maxRadius, chargePower);
  drawShockwaves();
  drawOuterShade(cx, cy, maxRadius, idleFactor);

  updateIntroOverlay();
  ctx.restore();
  requestAnimationFrame(draw);
}

// 输入模块：主指针按下时开始蓄能。
window.addEventListener("pointerdown", (event) => {
  if (isManuallyPaused) {
    return;
  }

  if (event.button === PRIMARY_POINTER_BUTTON) {
    startCharge(event.shiftKey ? -FULL_ALPHA : FULL_ALPHA);
  } else if (event.button === SECONDARY_POINTER_BUTTON) {
    startCharge(-FULL_ALPHA);
  }
});

// 输入模块：让漩涡中心平滑跟随指针位置。
window.addEventListener("pointermove", (event) => {
  lastMouseMoveTime = performance.now();
  targetCenter.x = clamp(event.clientX / width, POINTER_MIN_X, POINTER_MAX_X);
  targetCenter.y = clamp(event.clientY / height, POINTER_MIN_Y, POINTER_MAX_Y);
});

// 释放模块：将蓄积能量转换为向外扩散的冲击波。
window.addEventListener("pointerup", () => {
  if (isManuallyPaused) {
    return;
  }

  if (chargePower > RELEASE_TRIGGER_THRESHOLD) {
    const releaseIntensity = Math.pow(chargePower, RELEASE_INTENSITY_POWER);
    const visibleReleaseIntensity = lerp(0.18, FULL_ALPHA, releaseIntensity);

    releasePower = visibleReleaseIntensity;
    currentReleaseIntensity = releaseIntensity;
    releaseShakeAmplitude = visibleReleaseIntensity * RELEASE_SHAKE_STRENGTH;
    const waveX = width * vortexCenter.x;
    const waveY = height * vortexCenter.y;

    for (let i = ZERO_VALUE; i < SHOCKWAVE_COUNT; i += 1) {
      shockwaves.push({
        x: waveX,
        y: waveY,
        radius: i * SHOCKWAVE_RADIUS_STEP,
        alpha: clamp(visibleReleaseIntensity * SHOCKWAVE_ALPHA_SCALE * (FULL_ALPHA - i * SHOCKWAVE_ALPHA_DROP), ZERO_VALUE, FULL_ALPHA),
        power: releaseIntensity,
        speed: SHOCKWAVE_BASE_SPEED + releaseIntensity * SHOCKWAVE_INTENSITY_SPEED + i * SHOCKWAVE_INDEX_SPEED,
        width: SHOCKWAVE_BASE_WIDTH + releaseIntensity * SHOCKWAVE_INTENSITY_WIDTH - i * SHOCKWAVE_INDEX_WIDTH_DROP
      });
    }

    if (shockwaves.length > SHOCKWAVE_MAX_ACTIVE) {
      shockwaves = shockwaves.slice(shockwaves.length - SHOCKWAVE_MAX_ACTIVE);
    }
  }

  chargePower = ZERO_VALUE;
  pressing = false;
  isPressed = false;
  updateIntroOverlay();
});

// 取消模块：当指针取消或页面失焦时清除蓄能状态。
function cancelCharge() {
  pressing = false;
  isPressed = false;
  chargePower = ZERO_VALUE;
  updateIntroOverlay();
}

window.addEventListener("pointercancel", cancelCharge);
window.addEventListener("blur", cancelCharge);
window.addEventListener("resize", resize);
window.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

window.addEventListener("keydown", (event) => {
  if (event.code !== SPACE_KEY_CODE || event.repeat) {
    return;
  }

  event.preventDefault();
  toggleManualPause();
});

resize();
updateIntroOverlay();
requestAnimationFrame(draw);
