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
const MIN_SPIN = 0.48;
const INITIAL_SPIN_VELOCITY = MIN_SPIN;
const MAX_SPIN = 6.2;
const CHARGE_ACCELERATION = 1.1;
const RELEASE_DECELERATION = 2.1;
const IDLE_THRESHOLD_MS = 5000;
const IDLE_BLEND_SPEED = 0.03;
const IDLE_COMPLETE_THRESHOLD = 0.95;
const MANUAL_PAUSE_BLEND_SPEED = 0.018;
const IDLE_SPIN_FACTOR = 0.52;
const RELEASE_SPIN_BOOST = 3.3;
const CHARGE_SPIN_BOOST = 0.7;
const CHARGE_SPIN_POWER = 0.72;
const CENTER_FOLLOW_SPEED = 4.6;
const SPIN_DIRECTION_BLEND_SPEED = 0.08;

// 蓄能、释放与呼吸脉动参数。
const FULL_CHARGE_DURATION_MS = 10000;
const CHARGE_FADE_SPEED = 0.08;
const RELEASE_INTENSITY_POWER = 1.45;
const RELEASE_INTENSITY_HOLD_START_MS = 800;
const RELEASE_INTENSITY_HOLD_RANGE_MS = 9200;
const RELEASE_BASE_INTENSITY = 0.09;
const RELEASE_VISIBLE_INTENSITY_SCALE = 0.91;
const RELEASE_FADE_FAST = 0.052;
const RELEASE_FADE_SLOW = 0.022;
const BREATHING_TIME_SCALE = 0.001;
const BREATHING_AMPLITUDE = 0.04;
const ACTIVE_ENERGY_SCALE = 1.05;
const CHARGE_COMPRESSION_SCALE = 0.22;
const RELEASE_EXPANSION_SCALE = 0.48;
const CHARGE_ZOOM_SCALE = 0.1;
const IDLE_RADIUS_SCALE = 0.9;
const GLOW_IDLE_ALPHA = 0.56;
const GLOW_ACTIVE_ALPHA = 0.95;
const GLOW_BREATH_MIN = 0.75;
const GLOW_BREATH_MAX = 1.15;
const GLOW_BREATH_BASE = 0.96;
const GLOW_BREATH_RANGE = 0.08;
const CHARGE_GLOW_BOOST = 0.45;
const RELEASE_GLOW_BOOST = 1.6;
const MIN_GLOW_ALPHA = 0.18;
const MAX_GLOW_ALPHA = 1.25;
const IDLE_ATTRACTION_SCALE = 0.52;
const CHARGE_ATTRACTION_BOOST = 0.65;
const RELEASE_ATTRACTION_DROP = 0.85;
const MAIN_VORTEX_SCALE = 0.88;
const OVERLOAD_DURATION_MS = 2000;

// 屏幕震动与释放闪光参数。
const CHARGE_SHAKE_STRENGTH = 2;
const RELEASE_SHAKE_STRENGTH = 86;
const RELEASE_BASE_SHAKE = 2.2;
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
const RELEASE_FLASH_FRONT_SPEED_SCALE = 0.56;
const RELEASE_FLASH_FRONT_WIDTH_SCALE = 0.1;
const RELEASE_FLASH_INNER_ALPHA_SCALE = 0.34;
const RELEASE_FLASH_FRONT_ALPHA_SCALE = 1.05;

// 背景渐变与静置暗化参数。
const BACKGROUND_TOP_COLOR = "#fbcacb";
const BACKGROUND_BOTTOM_COLOR = "#f79697";
const IDLE_SHADOW_COLOR = "#170910";
const IDLE_SHADOW_ALPHA_SCALE = 0.72;
const RELEASE_SHADOW_ERASE_SCALE = 0.22;
const OUTER_RADIUS_SCALE = 1.08;

// 背景网格扭曲参数。
const GRID_BASE_ALPHA = 0.34;
const GRID_IDLE_ALPHA = 0.2;
const CHARGE_GRID_ALPHA_BOOST = 1.35;
const RELEASE_GRID_ALPHA_BOOST = 3;
const GRID_LINE_WIDTH = 1.55;
const MIN_GRID_GAP = 58;
const GRID_SCREEN_SCALE = 0.078;
const CHARGE_GRID_WARP = 0.42;
const RELEASE_GRID_WARP = 0.12;
const GRID_SEGMENT_COUNT = 10;
const GRID_INFLUENCE_RADIUS_SCALE = 0.38;
const GRID_CHARGE_INFLUENCE_BOOST = 0.16;
const GRID_SWIRL_STRENGTH = 0.64;
const GRID_CHARGE_SWIRL_BOOST = 2.25;
const GRID_RELEASE_SWIRL_BOOST = 0.72;
const GRID_PULL_STRENGTH = 0.045;
const GRID_CENTER_DENSITY_PULL = 0.13;
const GRID_RELEASE_EXPANSION = 0.075;
const GRID_FLOW_TIME_SCALE = 0.0012;
const GRID_NEAR_ALPHA_BOOST = 1.05;
const HALF_SCREEN_FACTOR = 0.5;

// 漩涡螺旋光带绘制参数。
const SPIRAL_STEP_COUNT = 620;
const SPIRAL_STEP_INCREMENT = 1;
const SPIRAL_IDLE_STEP_INCREMENT = 1;
const SPIRAL_RADIUS_POWER = 1.16;
const SPIRAL_TURN_MULTIPLIER = 19.4;
const SPIRAL_CHARGE_TURN_MULTIPLIER = 14.6;
const SPIRAL_WAVE_FREQUENCY = 24;
const SPIRAL_PHASE_WAVE_SCALE = 4.8;
const SPIRAL_Y_SCALE = 0.74;
const SPIRAL_FRONT_PHASE = Math.PI * 0.5;
const SPIRAL_FOREGROUND_DEPTH = 0.24;
const SPIRAL_BACKGROUND_DEPTH = 0.18;
const SPIRAL_FRONT_WIDTH_BOOST = 1.14;
const SPIRAL_BACK_WIDTH_DROP = 0.86;
const SPIRAL_FRONT_ALPHA_BOOST = 1.18;
const SPIRAL_BACK_ALPHA_DROP = 0.72;
const CHARGE_COLOR_POWER = 0.65;
const CHARGE_COLOR_RISE_SPEED = 0.08;
const CHARGE_COLOR_FADE_SPEED = 0.045;
const RELEASE_COLOR_RESIDUE_SCALE = 0.72;
const BRIGHT_SPIRAL_BLUR_ACTIVE = 4;
const BRIGHT_SPIRAL_BLUR_IDLE = 12;
const DARK_SPIRAL_BLUR_ACTIVE = 1;
const DARK_SPIRAL_BLUR_IDLE = 5;
const BRIGHT_SPIRAL_BANDS = [
  { start: 0.2, widthScale: 0.052, color: "rgba(255,255,255,.92)", colorAlpha: 0.92, alpha: 0.92, phaseScale: 1.04, depth: 0.82, baseRgb: [255, 255, 255], chargedRgb: [238, 82, 220], chargeMix: 0.56 },
  { start: 2.3, widthScale: 0.044, color: "rgba(255,255,255,.72)", colorAlpha: 0.72, alpha: 0.72, phaseScale: 0.94, depth: 0.56, baseRgb: [255, 248, 250], chargedRgb: [176, 24, 182], chargeMix: 0.9 },
  { start: 4.2, widthScale: 0.036, color: "rgba(255,228,229,.7)", colorAlpha: 0.7, alpha: 0.66, phaseScale: 0.86, depth: 0.34, baseRgb: [255, 228, 229], chargedRgb: [116, 10, 146], chargeMix: 1 }
];
const DARK_SPIRAL_BANDS = [
  { start: 1.2, widthScale: 0.038, color: "rgba(126,58,58,.42)", colorAlpha: 0.42, activeAlpha: 0.54, idleAlpha: 0.82, phaseScale: 0.78, depth: 0.24, baseRgb: [126, 58, 58], chargedRgb: [68, 8, 108], chargeMix: 0.82 },
  { start: 3.4, widthScale: 0.03, color: "rgba(126,58,58,.34)", colorAlpha: 0.34, activeAlpha: 0.42, idleAlpha: 0.7, phaseScale: 0.72, depth: 0.14, baseRgb: [126, 58, 58], chargedRgb: [48, 6, 96], chargeMix: 0.78 }
];

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
const CENTER_DEPTH_RADIUS_SCALE = 0.11;
const CENTER_DEPTH_MID_STOP = 0.46;
const CENTER_DEPTH_CENTER_ALPHA = 0.08;
const CENTER_DEPTH_MID_ALPHA = 0.05;
const CENTER_POINT_RADIUS_SCALE = 0.038;
const CENTER_POINT_HALO_RADIUS_SCALE = 0.095;
const CENTER_POINT_BASE_ALPHA = 0.46;
const CENTER_POINT_CHARGE_ALPHA = 0.36;
const CENTER_POINT_RELEASE_ALPHA = 0.42;
const CENTER_POINT_HALO_ALPHA = 0.2;
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
const CHARGE_SHADE_INNER_RADIUS_SCALE = 0.06;
const CHARGE_SHADE_OUTER_RADIUS_SCALE = 0.85;
const CHARGE_SHADE_MID_STOP = 0.38;
const CHARGE_SHADE_MID_ALPHA = 0.2;
const CHARGE_SHADE_EDGE_ALPHA = 0.56;

// 释放冲击波参数。
const RELEASE_TRIGGER_THRESHOLD = 0.08;
const RELEASE_IDLE_BLOCK_THRESHOLD = 0.05;
const RELEASE_IDLE_GRACE_MS = 1200;
const SHOCKWAVE_COUNT = 3;
const SHOCKWAVE_MAX_ACTIVE = 4;
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
const SHOCKWAVE_HALO_DRAW_THRESHOLD = 0.08;

// 最终边缘暗角参数。
const SHADE_INNER_RADIUS_SCALE = 0.12;
const SHADE_OUTER_RADIUS_SCALE = 0.9;
const SHADE_FIRST_STOP = 0.48;
const SHADE_SECOND_STOP = 0.72;
const SHADE_IDLE_DARK_ALPHA = 0.14;
const SHADE_ACTIVE_ALPHA = 0.1;
const SHADE_IDLE_ALPHA = 0.18;
const SHADE_EDGE_ACTIVE_ALPHA = 0.24;
const SHADE_EDGE_IDLE_ALPHA = 0.38;

// 指针交互参数。
const PRIMARY_POINTER_BUTTON = 0;
const SECONDARY_POINTER_BUTTON = 2;
const SPACE_KEY_CODE = "Space";
const POINTER_MIN_X = 0.14;
const POINTER_MAX_X = 0.86;
const POINTER_MIN_Y = 0.16;
const POINTER_MAX_Y = 0.84;

// 颜色常量。
const RGB_WHITE = "255,255,255";
const RGB_CORE_PULSE_MID = "255,238,241";
const RGB_CORE_PULSE_OUTER = "255,210,218";
const RGB_GRID_WARP_VERTICAL = "180,44,112";
const RGB_GRID_WARP_HORIZONTAL = "224,82,142";
const RGB_COMPRESSED_CORE_MID = "255,235,236";
const RGB_CHARGE_SHADE_CENTER = "60,10,25";
const RGB_CHARGE_SHADE_MID = "90,20,35";
const RGB_CHARGE_SHADE_EDGE = "80,12,30";
const RGB_SHADE_RED = "104,35,35";
const RGB_SHADE_DARK = "24,8,16";

// 满蓄能临界状态参数。
const OVERLOAD_SHAKE_STRENGTH = 1.4;

const canvas = document.getElementById("vortexCanvas");
const ctx = canvas.getContext("2d");
const introOverlay = document.getElementById("introOverlay");
const vortexCredit = document.getElementById("vortexCredit");

// 下面这些变量会在每一帧变化，用来记录当前动画和交互状态。
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
let visualChargePower = ZERO_VALUE; // 平滑后的蓄能视觉强度，避免点按时颜色和尺寸突然跳变。
let releasePower = ZERO_VALUE; // 释放后的残余能量强度，用于闪光、震动和冲击效果。
let currentReleaseIntensity = ZERO_VALUE; // 当前释放强度，由蓄能值非线性映射得到，用于统一控制释放反馈层级。
let chargedColorFade = ZERO_VALUE; // 蓄能后的颜色残留强度，让松开后深粉色平滑退回。
let inheritedColorFloor = ZERO_VALUE; // 下一次蓄能继承上一次释放余韵的颜色下限，避免重新按下时跳浅。
let isOverloaded = false; // 是否进入满蓄能过载状态。
let overloadStartTime = ZERO_VALUE; // 过载倒计时开始时间。
let releaseShakeAmplitude = ZERO_VALUE; // 释放后的独立余震强度，叠加在漩涡中心位置上。
let shockwaves = []; // 释放时生成的冲击波列表。
let lastFrameTime = ZERO_VALUE; // 上一帧时间戳，用于计算帧间隔。
let vortexCenter = { x: INITIAL_CENTER_X, y: INITIAL_CENTER_Y }; // 漩涡当前中心位置，使用屏幕比例坐标。
let targetCenter = { x: INITIAL_CENTER_X, y: INITIAL_CENTER_Y }; // 指针指向的目标中心位置。
let lastInteractionTime = performance.now(); // 最近一次有效交互时间，用于判断自动休眠状态。
let releaseGraceUntil = ZERO_VALUE; // 释放后暂停自动休眠计时的截止时间，避免余震被休眠打断。
let isIdle = false; // 当前是否进入静置休眠状态。
let idleFactor = FULL_ALPHA; // 静置状态过渡系数，用于平滑变暗和减速。
let manualPauseVisualFactor = FULL_ALPHA; // Space 切换时的视觉休眠系数，用于避免颜色、光圈和半径发生跳变。
let breathingFactor = FULL_ALPHA; // 全局呼吸脉动系数，影响半径、光晕和吸引强度。
let isManuallyPaused = true; // 是否处于手动强制休眠状态，初始为 true 以降低页面刚打开时的视觉冲击。
let warpedGridPoint = { x: ZERO_VALUE, y: ZERO_VALUE, influence: ZERO_VALUE }; // 网格扭曲计算复用点，避免每帧产生大量临时对象。

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

// 在两个数之间平滑过渡，很多动画的“慢慢变化”都靠它完成。
function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

// 把 "255,255,255" 这种颜色和透明度拼成 canvas 能用的 rgba 字符串。
function rgba(rgb, alpha) {
  return `rgba(${rgb},${alpha})`;
}

// 让一组 RGB 颜色逐渐变成另一组 RGB 颜色，用在蓄能变色上。
function lerpRgb(start, end, amount) {
  return `${Math.round(lerp(start[0], end[0], amount))},${Math.round(lerp(start[1], end[1], amount))},${Math.round(lerp(start[2], end[2], amount))}`;
}

// 蓄能时把原来的白色/暗红色光带慢慢染成更深的粉紫色。
function getChargedBandColor(band, colorCharge) {
  if (!band.baseRgb || colorCharge <= ZERO_VALUE) {
    return band.color;
  }

  return rgba(lerpRgb(band.baseRgb, band.chargedRgb, colorCharge * band.chargeMix), band.colorAlpha);
}

// 交互活跃标记模块：鼠标、键盘和释放反馈都会刷新自动休眠计时起点。
function markInteractionActive(time = performance.now()) {
  lastInteractionTime = time;
}

// 启动引导层模块：休眠时显示中央序章，运行时转化为左下角 HUD。
function updateIntroOverlay() {
  if (!introOverlay) {
    return;
  }

  // 手动休眠时显示中央标题；启动后切换成左下角操作提示。
  introOverlay.classList.toggle("is-intro", isManuallyPaused);
  introOverlay.classList.toggle("is-hud", !isManuallyPaused);
  introOverlay.classList.toggle("is-hud-dimmed", !isManuallyPaused && (isPressed || pressing));

  if (vortexCredit) {
    vortexCredit.classList.toggle("is-visible", isManuallyPaused);
  }
}

// 手动休眠模块：通过空格键切换强制休眠，视觉参数交给主循环平滑过渡。
function toggleManualPause() {
  isManuallyPaused = !isManuallyPaused;

  if (isManuallyPaused) {
    // 进入休眠时清掉正在进行的蓄能，防止下次启动继承旧状态。
    isPressed = false;
    pressing = false;
    chargePower = ZERO_VALUE;
    isOverloaded = false;
    overloadStartTime = ZERO_VALUE;
    releaseGraceUntil = ZERO_VALUE;
  } else {
    chargePower = ZERO_VALUE;
    markInteractionActive();
  }

  updateIntroOverlay();
}

// 蓄能启动模块：统一处理左右键和组合键触发的蓄能入口。
function startCharge(direction) {
  // direction 为 1 或 -1，用来决定漩涡正向还是反向旋转。
  targetSpinDirection = direction;
  pressing = true;
  isPressed = true;
  chargePower = ZERO_VALUE;
  inheritedColorFloor = chargedColorFade;
  pressStartTime = performance.now();
  releaseGraceUntil = ZERO_VALUE;
  isOverloaded = false;
  overloadStartTime = ZERO_VALUE;
  markInteractionActive(pressStartTime);
  updateIntroOverlay();
}

// 尺寸适配模块：让 Canvas 在高分辨率屏幕上保持清晰。
function resize() {
  // canvas 的真实像素尺寸要乘设备像素比，否则高清屏上会发糊。
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
function drawSpiralBand(cx, cy, maxRadius, start, widthScale, color, alpha, phase, stepIncrement, lineDepth, turnMultiplier) {
  ctx.beginPath();

  // 把很多小点连成一条螺旋线，点越多，曲线越平滑。
  for (let step = ZERO_VALUE; step <= SPIRAL_STEP_COUNT; step += stepIncrement) {
    const t = step / SPIRAL_STEP_COUNT;
    const radius = maxRadius * Math.pow(t, SPIRAL_RADIUS_POWER);
    const turn = start + t * Math.PI * turnMultiplier + phase;
    const frontAmount = (Math.sin(turn - SPIRAL_FRONT_PHASE) + FULL_ALPHA) * HALF_SCREEN_FACTOR;
    const depthScale = lerp(FULL_ALPHA - SPIRAL_BACKGROUND_DEPTH, FULL_ALPHA + SPIRAL_FOREGROUND_DEPTH, frontAmount);
    const wave = Math.sin(t * SPIRAL_WAVE_FREQUENCY + phase * SPIRAL_PHASE_WAVE_SCALE + start) * widthScale;
    const depthRadius = (radius + wave) * depthScale;
    const x = cx + Math.cos(turn) * depthRadius;
    const y = cy + Math.sin(turn) * depthRadius * SPIRAL_Y_SCALE;

    if (step === ZERO_VALUE) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.strokeStyle = color;
  ctx.globalAlpha = alpha * lerp(SPIRAL_BACK_ALPHA_DROP, SPIRAL_FRONT_ALPHA_BOOST, lineDepth);
  ctx.lineWidth = widthScale * lerp(SPIRAL_BACK_WIDTH_DROP, SPIRAL_FRONT_WIDTH_BOOST, lineDepth);
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

// 释放闪光模块：让白化沿冲击波从中心向外传递，而不是整屏同时闪白。
function drawReleaseFlash(cx, cy, maxRadius, releaseAmount) {
  if (releaseAmount <= RELEASE_FLASH_THRESHOLD) {
    return;
  }

  const leadingWave = shockwaves.length > ZERO_VALUE ? shockwaves[ZERO_VALUE] : null;
  const rawFrontRadius = leadingWave ? leadingWave.radius : maxRadius * 0.08;
  const frontRadius = rawFrontRadius * RELEASE_FLASH_FRONT_SPEED_SCALE;
  const frontWidth = maxRadius * RELEASE_FLASH_FRONT_WIDTH_SCALE;
  const frontProgress = clamp(frontRadius / Math.max(FULL_ALPHA, maxRadius), ZERO_VALUE, FULL_ALPHA);
  const flashAlpha = Math.min(RELEASE_FLASH_MAX_ALPHA, releaseAmount * RELEASE_FLASH_ALPHA_SCALE);

  ctx.save();
  ctx.globalCompositeOperation = "screen";

  // 内圈先亮一下，外圈再跟着冲击波扩散出去。
  const innerGlow = ctx.createRadialGradient(cx, cy, ZERO_VALUE, cx, cy, Math.max(frontRadius, maxRadius * 0.12));
  innerGlow.addColorStop(ZERO_VALUE, rgba(RGB_WHITE, flashAlpha * RELEASE_FLASH_INNER_ALPHA_SCALE));
  innerGlow.addColorStop(0.62, rgba(RGB_CORE_PULSE_MID, flashAlpha * RELEASE_FLASH_INNER_ALPHA_SCALE * (FULL_ALPHA - frontProgress * 0.4)));
  innerGlow.addColorStop(FULL_ALPHA, rgba(RGB_WHITE, ZERO_VALUE));
  ctx.fillStyle = innerGlow;
  ctx.fillRect(-DRAW_OVERSCAN, -DRAW_OVERSCAN, width + DRAW_OVERSCAN * OVERSCAN_SIZE_SCALE, height + DRAW_OVERSCAN * OVERSCAN_SIZE_SCALE);

  const frontGlow = ctx.createRadialGradient(
    cx,
    cy,
    Math.max(ZERO_VALUE, frontRadius - frontWidth),
    cx,
    cy,
    frontRadius + frontWidth
  );
  frontGlow.addColorStop(ZERO_VALUE, rgba(RGB_WHITE, ZERO_VALUE));
  frontGlow.addColorStop(0.52, rgba(RGB_WHITE, flashAlpha * RELEASE_FLASH_FRONT_ALPHA_SCALE));
  frontGlow.addColorStop(FULL_ALPHA, rgba(RGB_WHITE, ZERO_VALUE));
  ctx.fillStyle = frontGlow;
  ctx.fillRect(-DRAW_OVERSCAN, -DRAW_OVERSCAN, width + DRAW_OVERSCAN * OVERSCAN_SIZE_SCALE, height + DRAW_OVERSCAN * OVERSCAN_SIZE_SCALE);
  ctx.restore();
}

// 网格模块：让背景网格向漩涡中心发生轻微扭曲。
function warpGridPoint(x, y, cx, cy, influenceRadius, swirlStrength, pullStrength, releaseAmount, flowPhase) {
  const dx = x - cx;
  const dy = y - cy;
  const distance = Math.hypot(dx, dy);

  // 离漩涡中心越近，网格点受到的拉扯和旋转越强。
  const baseInfluence = clamp(FULL_ALPHA - distance / influenceRadius, ZERO_VALUE, FULL_ALPHA);
  const influence = Math.pow(baseInfluence, 1.35);

  if (influence <= ZERO_VALUE) {
    warpedGridPoint.x = x;
    warpedGridPoint.y = y;
    warpedGridPoint.influence = ZERO_VALUE;
    return warpedGridPoint;
  }

  const angle = Math.atan2(dy, dx);
  const radius = distance * (FULL_ALPHA - pullStrength * influence + releaseAmount * GRID_RELEASE_EXPANSION * influence);
  const centerPull = GRID_CENTER_DENSITY_PULL * influence * influence * influence;
  const angleOffset = spinDirection * (
    influence * influence * swirlStrength +
    Math.sin(flowPhase + distance * 0.008) * influence * 0.075
  );

  warpedGridPoint.x = cx + Math.cos(angle + angleOffset) * radius;
  warpedGridPoint.y = cy + Math.sin(angle + angleOffset) * radius * (FULL_ALPHA - centerPull);
  warpedGridPoint.influence = influence;
  return warpedGridPoint;
}

function drawWarpedGrid(cx, cy, gridAlpha, chargeAmount, releaseAmount, maxRadius, time, idleAmount) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.lineWidth = GRID_LINE_WIDTH;

  // 每条网格线被拆成多个小段，每个点单独扭曲，这样线条才会弯。
  const gridGap = Math.max(MIN_GRID_GAP, Math.min(width, height) * GRID_SCREEN_SCALE);
  const flowPhase = time * GRID_FLOW_TIME_SCALE;
  const influenceRadius = maxRadius * (GRID_INFLUENCE_RADIUS_SCALE + chargeAmount * GRID_CHARGE_INFLUENCE_BOOST);
  const swirlStrength = (GRID_SWIRL_STRENGTH + chargeAmount * GRID_CHARGE_SWIRL_BOOST + releaseAmount * GRID_RELEASE_SWIRL_BOOST) * lerp(FULL_ALPHA, 0.46, idleAmount);
  const pullStrength = GRID_PULL_STRENGTH + chargeAmount * CHARGE_GRID_WARP + releaseAmount * RELEASE_GRID_WARP;
  const segmentHeight = height / GRID_SEGMENT_COUNT;
  const segmentWidth = width / GRID_SEGMENT_COUNT;

  for (let x = -gridGap; x < width + gridGap; x += gridGap) {
    ctx.beginPath();
    let strongestInfluence = ZERO_VALUE;

    // 先画竖线，每条竖线由多个被扭曲后的点连接出来。
    for (let i = ZERO_VALUE; i <= GRID_SEGMENT_COUNT; i += 1) {
      const y = i * segmentHeight;
      const warped = warpGridPoint(x, y, cx, cy, influenceRadius, swirlStrength, pullStrength, releaseAmount, flowPhase);
      strongestInfluence = Math.max(strongestInfluence, warped.influence);
      if (i === ZERO_VALUE) {
        ctx.moveTo(warped.x, warped.y);
      } else {
        ctx.lineTo(warped.x, warped.y);
      }
    }
    ctx.strokeStyle = rgba(RGB_GRID_WARP_VERTICAL, gridAlpha * (FULL_ALPHA + strongestInfluence * GRID_NEAR_ALPHA_BOOST));
    ctx.stroke();
  }

  for (let y = -gridGap; y < height + gridGap; y += gridGap) {
    ctx.beginPath();
    let strongestInfluence = ZERO_VALUE;

    // 再画横线，处理方式和竖线一样。
    for (let i = ZERO_VALUE; i <= GRID_SEGMENT_COUNT; i += 1) {
      const x = i * segmentWidth;
      const warped = warpGridPoint(x, y, cx, cy, influenceRadius, swirlStrength, pullStrength, releaseAmount, flowPhase);
      strongestInfluence = Math.max(strongestInfluence, warped.influence);
      if (i === ZERO_VALUE) {
        ctx.moveTo(warped.x, warped.y);
      } else {
        ctx.lineTo(warped.x, warped.y);
      }
    }
    ctx.strokeStyle = rgba(RGB_GRID_WARP_HORIZONTAL, gridAlpha * (FULL_ALPHA + strongestInfluence * GRID_NEAR_ALPHA_BOOST));
    ctx.stroke();
  }

  ctx.restore();
}

// 漩涡主体模块：叠加明亮和暗色螺旋层，形成主体旋转感。
function drawVortexBody(cx, cy, maxRadius, attractionStrength, glowAlpha, idleAmount, spiralStepIncrement, chargeAmount, colorCharge) {
  const turnMultiplier = lerp(SPIRAL_TURN_MULTIPLIER, SPIRAL_CHARGE_TURN_MULTIPLIER, chargeAmount);

  // 先画亮色光带，再画暗色光带，叠在一起才有漩涡的层次。
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
      getChargedBandColor(band, colorCharge),
      band.alpha * glowAlpha,
      spin * band.phaseScale,
      spiralStepIncrement,
      band.depth,
      turnMultiplier
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
      getChargedBandColor(band, colorCharge),
      lerp(band.activeAlpha, band.idleAlpha, idleAmount),
      spin * band.phaseScale,
      spiralStepIncrement,
      band.depth,
      turnMultiplier
    );
  });
  ctx.restore();
}

// 核心脉冲模块：用柔和的中心压缩光效替代几何蓄能环。
function drawCoreEnergyPulse(cx, cy, maxRadius, chargeAmount, time) {
  if (chargeAmount <= CORE_PULSE_THRESHOLD) {
    return;
  }

  const pulseAmount = (chargeAmount - CORE_PULSE_THRESHOLD) / CORE_PULSE_RANGE;
  const pulseBreath = CORE_PULSE_BREATH_BASE + Math.sin(time * CORE_PULSE_TIME_SCALE) * CORE_PULSE_BREATH_SCALE;

  // 越接近满蓄能，中心亮斑越小，像是在向内压缩。
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
function drawCenterGlow(cx, cy, maxRadius, glowAlpha, chargeAmount, releaseAmount, wakeSuppression) {
  // 先给中心铺一层很淡的暗色，让后面的白色核心更突出。
  const centerDepth = ctx.createRadialGradient(cx, cy, ZERO_VALUE, cx, cy, maxRadius * CENTER_DEPTH_RADIUS_SCALE);
  centerDepth.addColorStop(ZERO_VALUE, rgba(RGB_SHADE_DARK, CENTER_DEPTH_CENTER_ALPHA * lerp(FULL_ALPHA, 0.72, chargeAmount)));
  centerDepth.addColorStop(CENTER_DEPTH_MID_STOP, rgba(RGB_SHADE_RED, CENTER_DEPTH_MID_ALPHA));
  centerDepth.addColorStop(FULL_ALPHA, rgba(RGB_SHADE_RED, ZERO_VALUE));
  ctx.save();
  ctx.globalCompositeOperation = "multiply";
  ctx.fillStyle = centerDepth;
  ctx.fillRect(ZERO_VALUE, ZERO_VALUE, width, height);
  ctx.restore();

  const centerGlow = ctx.createRadialGradient(cx, cy, ZERO_VALUE, cx, cy, maxRadius * CENTER_GLOW_RADIUS_SCALE);
  centerGlow.addColorStop(ZERO_VALUE, rgba(RGB_WHITE, CENTER_GLOW_CENTER_ALPHA * glowAlpha * wakeSuppression));
  centerGlow.addColorStop(CENTER_GLOW_MID_STOP, rgba(RGB_COMPRESSED_CORE_MID, CENTER_GLOW_MID_ALPHA * glowAlpha * wakeSuppression));
  centerGlow.addColorStop(FULL_ALPHA, rgba(RGB_WHITE, ZERO_VALUE));
  ctx.fillStyle = centerGlow;
  ctx.fillRect(ZERO_VALUE, ZERO_VALUE, width, height);

  const pointPower = clamp(chargeAmount * CENTER_POINT_CHARGE_ALPHA + releaseAmount * CENTER_POINT_RELEASE_ALPHA, ZERO_VALUE, FULL_ALPHA);

  // pointGlow 是中心外面一圈光，centerPoint 是最中间的小亮点。
  const pointGlow = ctx.createRadialGradient(cx, cy, ZERO_VALUE, cx, cy, maxRadius * CENTER_POINT_HALO_RADIUS_SCALE);
  pointGlow.addColorStop(ZERO_VALUE, rgba(RGB_WHITE, (CENTER_POINT_BASE_ALPHA + pointPower) * wakeSuppression));
  pointGlow.addColorStop(0.28, rgba(RGB_COMPRESSED_CORE_MID, (CENTER_POINT_HALO_ALPHA + pointPower * 0.26) * wakeSuppression));
  pointGlow.addColorStop(FULL_ALPHA, rgba(RGB_WHITE, ZERO_VALUE));
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.fillStyle = pointGlow;
  ctx.fillRect(ZERO_VALUE, ZERO_VALUE, width, height);
  ctx.restore();

  const centerPoint = ctx.createRadialGradient(cx, cy, ZERO_VALUE, cx, cy, maxRadius * CENTER_POINT_RADIUS_SCALE);
  centerPoint.addColorStop(ZERO_VALUE, rgba(RGB_WHITE, (0.76 + pointPower * 0.22) * wakeSuppression));
  centerPoint.addColorStop(0.52, rgba(RGB_CORE_PULSE_MID, (0.34 + pointPower * 0.22) * wakeSuppression));
  centerPoint.addColorStop(FULL_ALPHA, rgba(RGB_WHITE, ZERO_VALUE));
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.fillStyle = centerPoint;
  ctx.fillRect(ZERO_VALUE, ZERO_VALUE, width, height);
  ctx.restore();

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
    // 每一帧都让冲击波半径变大、透明度变低。
    wave.radius += wave.speed;
    wave.alpha *= SHOCKWAVE_ALPHA_DECAY;

    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.strokeStyle = rgba(RGB_WHITE, wave.alpha);
    ctx.lineWidth = wave.width;
    ctx.beginPath();
    ctx.ellipse(wave.x, wave.y, wave.radius, wave.radius * SHOCKWAVE_Y_SCALE, ZERO_VALUE, ZERO_VALUE, FULL_CIRCLE);
    ctx.stroke();

    if (wave.alpha > SHOCKWAVE_HALO_DRAW_THRESHOLD) {
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
    }
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

  // 按住鼠标时逐渐蓄能；松开后，蓄能相关的颜色和强度慢慢退回去。
  if (isPressed) {
    chargePower = clamp((now - pressStartTime) / FULL_CHARGE_DURATION_MS, ZERO_VALUE, FULL_ALPHA);
    visualChargePower = lerp(visualChargePower, chargePower, CHARGE_COLOR_RISE_SPEED);
    inheritedColorFloor = lerp(inheritedColorFloor, ZERO_VALUE, CHARGE_COLOR_FADE_SPEED);
    chargedColorFade = lerp(
      chargedColorFade,
      Math.max(Math.pow(visualChargePower, CHARGE_COLOR_POWER), inheritedColorFloor),
      CHARGE_COLOR_RISE_SPEED
    );
    if (chargePower >= FULL_ALPHA) {
      if (!isOverloaded) {
        isOverloaded = true;
        overloadStartTime = now;
      } else if (now - overloadStartTime >= OVERLOAD_DURATION_MS) {
        triggerRelease(now, true);
      }
    }
  } else {
    chargePower = lerp(chargePower, ZERO_VALUE, CHARGE_FADE_SPEED);
    visualChargePower = lerp(visualChargePower, ZERO_VALUE, CHARGE_COLOR_FADE_SPEED);
    chargedColorFade = lerp(chargedColorFade, currentReleaseIntensity * RELEASE_COLOR_RESIDUE_SCALE, CHARGE_COLOR_FADE_SPEED);
    inheritedColorFloor = ZERO_VALUE;
    isOverloaded = false;
    overloadStartTime = ZERO_VALUE;
  }
  const releaseFadeSpeed = lerp(RELEASE_FADE_FAST, RELEASE_FADE_SLOW, currentReleaseIntensity);
  releasePower = lerp(releasePower, ZERO_VALUE, releaseFadeSpeed);
  if (releasePower < RELEASE_FLASH_THRESHOLD) {
    currentReleaseIntensity = ZERO_VALUE;
  }
  const isReleaseSettling = releasePower > RELEASE_IDLE_BLOCK_THRESHOLD ||
    releaseShakeAmplitude > RELEASE_QUAKE_MIN_AMPLITUDE ||
    shockwaves.length > ZERO_VALUE ||
    now < releaseGraceUntil;

  // 正在蓄能或冲击波还没结束时，不让页面进入自动休眠。
  if (!isManuallyPaused && (isPressed || isReleaseSettling)) {
    markInteractionActive(now);
  }

  // 计算当前是清醒、自动休眠，还是手动休眠；后面的透明度、速度、半径都会用到它。
  const idleProgress = clamp((now - lastInteractionTime) / IDLE_THRESHOLD_MS, ZERO_VALUE, FULL_ALPHA);
  const targetIdleFactor = isManuallyPaused ? FULL_ALPHA : isPressed || isReleaseSettling ? ZERO_VALUE : idleProgress;
  const previousIdleFactor = idleFactor;
  idleFactor = lerp(idleFactor, targetIdleFactor, IDLE_BLEND_SPEED);
  manualPauseVisualFactor = lerp(
    manualPauseVisualFactor,
    isManuallyPaused ? FULL_ALPHA : ZERO_VALUE,
    MANUAL_PAUSE_BLEND_SPEED
  );
  isIdle = idleFactor > IDLE_COMPLETE_THRESHOLD;
  const sleepCompleteBlend = clamp(
    (idleFactor - IDLE_COMPLETE_THRESHOLD) / (FULL_ALPHA - IDLE_COMPLETE_THRESHOLD),
    ZERO_VALUE,
    FULL_ALPHA
  );
  const sleepVisualFactor = Math.max(
    manualPauseVisualFactor,
    lerp(idleFactor, FULL_ALPHA, sleepCompleteBlend)
  );

  // 根据当前状态算出这一帧的转速、大小、亮度和吸引感。
  const idleSpin = MIN_SPIN * IDLE_SPIN_FACTOR;
  const baseSpin = lerp(MIN_SPIN, idleSpin, sleepVisualFactor);
  const chargeSpinAmount = Math.pow(visualChargePower, CHARGE_SPIN_POWER);

  // 蓄能时目标转速提高；释放后会短暂加速，然后慢慢降回去。
  const targetSpin = isPressed
    ? lerp(baseSpin, MAX_SPIN + CHARGE_SPIN_BOOST, chargeSpinAmount)
    : baseSpin + releasePower * RELEASE_SPIN_BOOST;
  const easing = isPressed ? CHARGE_ACCELERATION : RELEASE_DECELERATION;
  const energyFactor = lerp(FULL_ALPHA, ACTIVE_ENERGY_SCALE, visualChargePower);
  const compressionFactor = FULL_ALPHA - visualChargePower * CHARGE_COMPRESSION_SCALE + releasePower * RELEASE_EXPANSION_SCALE;
  const chargeZoomFactor = FULL_ALPHA + visualChargePower * CHARGE_ZOOM_SCALE;
  const radiusFactor = breathingFactor * lerp(FULL_ALPHA, IDLE_RADIUS_SCALE, sleepVisualFactor) * energyFactor * compressionFactor * chargeZoomFactor;
  const isWakingFromSleep = !isManuallyPaused &&
    (manualPauseVisualFactor > CHARGE_SHADE_THRESHOLD ||
      (targetIdleFactor < previousIdleFactor && previousIdleFactor > HALF_SCREEN_FACTOR));
  const wakeEnergyRelease = clamp(
    (visualChargePower + releasePower) / 0.35,
    ZERO_VALUE,
    FULL_ALPHA
  );
  const wakeGlowSuppression = isWakingFromSleep
    ? lerp(lerp(FULL_ALPHA, 0.08, Math.pow(sleepVisualFactor, 1.35)), FULL_ALPHA, wakeEnergyRelease)
    : FULL_ALPHA;
  const glowAlpha = clamp(
    lerp(GLOW_ACTIVE_ALPHA, GLOW_IDLE_ALPHA, sleepVisualFactor) *
    lerp(GLOW_BREATH_MIN, GLOW_BREATH_MAX, (breathingFactor - GLOW_BREATH_BASE) / GLOW_BREATH_RANGE) *
    (FULL_ALPHA + visualChargePower * CHARGE_GLOW_BOOST + releasePower * RELEASE_GLOW_BOOST) *
    clamp(wakeGlowSuppression, 0.08, FULL_ALPHA),
    MIN_GLOW_ALPHA,
    MAX_GLOW_ALPHA
  );
  const attractionStrength = lerp(FULL_ALPHA, IDLE_ATTRACTION_SCALE, sleepVisualFactor) *
    breathingFactor *
    (FULL_ALPHA + visualChargePower * CHARGE_ATTRACTION_BOOST - releasePower * RELEASE_ATTRACTION_DROP);
  const gridAlpha = lerp(GRID_BASE_ALPHA, GRID_IDLE_ALPHA, sleepVisualFactor) *
    (FULL_ALPHA + visualChargePower * CHARGE_GRID_ALPHA_BOOST + releasePower * RELEASE_GRID_ALPHA_BOOST);
  const isHighEnergyFrame = isPressed || visualChargePower > CHARGE_SHADE_THRESHOLD || releasePower > RELEASE_FLASH_THRESHOLD;
  const spiralStepIncrement = sleepVisualFactor > HALF_SCREEN_FACTOR && !isHighEnergyFrame ? SPIRAL_IDLE_STEP_INCREMENT : SPIRAL_STEP_INCREMENT;

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

  // 漩涡中心会跟随鼠标移动；释放后的余震会在这个基础上额外抖动。
  const baseCx = width * vortexCenter.x;
  const baseCy = height * vortexCenter.y;
  const releaseShakeOffsetX = Math.sin(time * RELEASE_QUAKE_X_TIME_SCALE) * releaseShakeAmplitude;
  const releaseShakeOffsetY = Math.cos(time * RELEASE_QUAKE_Y_TIME_SCALE) * releaseShakeAmplitude * RELEASE_QUAKE_Y_SCALE;
  const cx = baseCx + releaseShakeOffsetX;
  const cy = baseCy + releaseShakeOffsetY;
  const overloadAmount = isOverloaded ? clamp((now - overloadStartTime) / OVERLOAD_DURATION_MS, ZERO_VALUE, FULL_ALPHA) : ZERO_VALUE;
  const screenShake = visualChargePower * CHARGE_SHAKE_STRENGTH + overloadAmount * OVERLOAD_SHAKE_STRENGTH;
  const shakeX = Math.sin(time * SHAKE_X_TIME_SCALE) * screenShake;
  const shakeY = Math.cos(time * SHAKE_Y_TIME_SCALE) * screenShake;
  const maxRadius = Math.max(
    Math.hypot(cx, cy),
    Math.hypot(width - cx, cy),
    Math.hypot(cx, height - cy),
    Math.hypot(width - cx, height - cy)
  ) * OUTER_RADIUS_SCALE * radiusFactor * MAIN_VORTEX_SCALE;

  drawBackground(sleepVisualFactor, releasePower);
  drawReleaseFlash(cx, cy, maxRadius, releasePower);

  // 下面按从背景到前景的顺序绘制，顺序变了视觉效果也会变。
  ctx.save();

  // screenShake 只移动视觉层，不改变真正的鼠标目标位置。
  ctx.translate(shakeX, shakeY);

  drawWarpedGrid(cx, cy, gridAlpha, visualChargePower, releasePower, maxRadius, time, sleepVisualFactor);
  drawVortexBody(cx, cy, maxRadius, attractionStrength, glowAlpha, sleepVisualFactor, spiralStepIncrement, visualChargePower, chargedColorFade);
  drawCoreEnergyPulse(cx, cy, maxRadius, visualChargePower, time);
  drawCenterGlow(cx, cy, maxRadius, glowAlpha, visualChargePower, releasePower, clamp(wakeGlowSuppression, 0.08, FULL_ALPHA));
  drawChargeCompressionShade(cx, cy, maxRadius, visualChargePower);
  drawShockwaves();
  drawOuterShade(cx, cy, maxRadius, sleepVisualFactor);
  ctx.restore();

  updateIntroOverlay();
  requestAnimationFrame(draw);
}

// 输入模块：主指针按下时开始蓄能。
window.addEventListener("pointerdown", (event) => {
  if (isManuallyPaused) {
    return;
  }

  // 左键正向蓄能，右键或 Shift+左键反向蓄能。
  if (event.button === PRIMARY_POINTER_BUTTON) {
    startCharge(event.shiftKey ? -FULL_ALPHA : FULL_ALPHA);
  } else if (event.button === SECONDARY_POINTER_BUTTON) {
    startCharge(-FULL_ALPHA);
  }
});

// 输入模块：让漩涡中心平滑跟随指针位置。
window.addEventListener("pointermove", (event) => {
  markInteractionActive();
  targetCenter.x = clamp(event.clientX / width, POINTER_MIN_X, POINTER_MAX_X);
  targetCenter.y = clamp(event.clientY / height, POINTER_MIN_Y, POINTER_MAX_Y);
});

// 释放模块：将蓄积能量转换为向外扩散的冲击波。
function triggerRelease(releaseTime = performance.now(), forceFullRelease = false) {
  markInteractionActive(releaseTime);

  if (chargePower > RELEASE_TRIGGER_THRESHOLD) {
    const holdDuration = releaseTime - pressStartTime;

    // 按住时间越长，释放强度越高；自动过载释放时直接按满强度处理。
    const releaseRaw = clamp((holdDuration - RELEASE_INTENSITY_HOLD_START_MS) / RELEASE_INTENSITY_HOLD_RANGE_MS, ZERO_VALUE, FULL_ALPHA);
    const releaseIntensity = forceFullRelease ? FULL_ALPHA : Math.pow(releaseRaw, RELEASE_INTENSITY_POWER);
    const visibleReleaseIntensity = RELEASE_BASE_INTENSITY + releaseIntensity * RELEASE_VISIBLE_INTENSITY_SCALE;

    releasePower = Math.max(releasePower, visibleReleaseIntensity);
    currentReleaseIntensity = Math.max(currentReleaseIntensity, releaseIntensity);
    releaseShakeAmplitude = Math.max(releaseShakeAmplitude, RELEASE_BASE_SHAKE + releaseIntensity * RELEASE_SHAKE_STRENGTH);
    releaseGraceUntil = releaseTime + RELEASE_IDLE_GRACE_MS;
    const waveX = width * vortexCenter.x;
    const waveY = height * vortexCenter.y;

    // 一次释放生成多圈冲击波，后面的圈稍弱一点，形成向外扩散的感觉。
    for (let i = ZERO_VALUE; i < SHOCKWAVE_COUNT; i += 1) {
      shockwaves.push({
        x: waveX,
        y: waveY,
        radius: i * SHOCKWAVE_RADIUS_STEP,
        alpha: clamp(visibleReleaseIntensity * SHOCKWAVE_ALPHA_SCALE * (FULL_ALPHA - i * SHOCKWAVE_ALPHA_DROP), ZERO_VALUE, FULL_ALPHA),
        power: releaseIntensity,
        speed: SHOCKWAVE_BASE_SPEED * visibleReleaseIntensity + releaseIntensity * SHOCKWAVE_INTENSITY_SPEED + i * SHOCKWAVE_INDEX_SPEED,
        width: Math.max(FULL_ALPHA, SHOCKWAVE_BASE_WIDTH * visibleReleaseIntensity + releaseIntensity * SHOCKWAVE_INTENSITY_WIDTH - i * SHOCKWAVE_INDEX_WIDTH_DROP)
      });
    }

    if (shockwaves.length > SHOCKWAVE_MAX_ACTIVE) {
      shockwaves = shockwaves.slice(shockwaves.length - SHOCKWAVE_MAX_ACTIVE);
    }
  }

  chargePower = ZERO_VALUE;
  pressing = false;
  isPressed = false;
  isOverloaded = false;
  overloadStartTime = ZERO_VALUE;
  updateIntroOverlay();
}

window.addEventListener("pointerup", () => {
  if (isManuallyPaused) {
    return;
  }

  triggerRelease();
});

// 取消模块：当指针取消或页面失焦时清除蓄能状态。
function cancelCharge() {
  markInteractionActive();
  releaseGraceUntil = ZERO_VALUE;
  pressing = false;
  isPressed = false;
  chargePower = ZERO_VALUE;
  isOverloaded = false;
  overloadStartTime = ZERO_VALUE;
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

  // 空格键用来启动或暂停；event.repeat 可以避免长按空格时反复切换。
  event.preventDefault();
  toggleManualPause();
});

// 页面刚加载时先设置画布尺寸和提示状态，然后启动循环动画。
resize();
updateIntroOverlay();
requestAnimationFrame(draw);
