"use strict";
var __hooks = React;
var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef;
// Auto-generated inline Lucide icon components (from lucide-static, ISC license)
// Avoids any runtime dependency on a lucide-react CDN bundle.
function makeIcon(inner) {
  return React.forwardRef(function LucideIcon(props, ref) {
    var size = props.size || 24;
    var color = props.color || 'currentColor';
    var strokeWidth = props.strokeWidth || 2;
    var rest = {};
    for (var k in props) {
      if (k === 'size' || k === 'color' || k === 'strokeWidth') continue;
      rest[k] = props[k];
    }
    return React.createElement('svg', Object.assign({
      ref: ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth: strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      dangerouslySetInnerHTML: { __html: inner }
    }, rest));
  });
}

var BookOpen = makeIcon(`<path d="M12 5v16" />
  <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />`);
var User = makeIcon(`<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
  <circle cx="12" cy="7" r="4" />`);
var DoorOpen = makeIcon(`<path d="M10 21H2" />
  <path d="M10 3H7a2 2 0 00-2 2v16" />
  <path d="M14 12h.01" />
  <path d="M19 21V5a2 2 0 00-1.675-1.974l-6.163-1.013A1 1 0 0010 3v18a1 1 0 001.124.992z" />
  <path d="M22 21h-3" />`);
var ShieldCheck = makeIcon(`<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  <path d="m9 12 2 2 4-4" />`);
var ChevronDown = makeIcon(`<path d="m6 9 6 6 6-6" />`);
var AlertCircle = makeIcon(`<circle cx="12" cy="12" r="10" />
  <line x1="12" x2="12" y1="8" y2="12" />
  <line x1="12" x2="12.01" y1="16" y2="16" />`);
var X = makeIcon(`<path d="M18 6 6 18" />
  <path d="m6 6 12 12" />`);
var Check = makeIcon(`<path d="M20 6 9 17l-5-5" />`);
var Calendar = makeIcon(`<path d="M8 2v3" />
  <path d="M16 2v3" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
  <path d="M3 9h18" />`);
var Trash2 = makeIcon(`<path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />`);
var Settings = makeIcon(`<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
  <circle cx="12" cy="12" r="3" />`);
var ArrowRight = makeIcon(`<path d="M5 12h14" />
  <path d="m12 5 7 7-7 7" />`);
var Plus = makeIcon(`<path d="M5 12h14" />
  <path d="M12 5v14" />`);
var Upload = makeIcon(`<path d="M12 3v12" />
  <path d="m17 8-5-5-5 5" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />`);
var Download = makeIcon(`<path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" />`);
var FileSpreadsheet = makeIcon(`<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 13h2" />
  <path d="M14 13h2" />
  <path d="M8 17h2" />
  <path d="M14 17h2" />`);
var Copy = makeIcon(`<rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />`);
var Save = makeIcon(`<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
  <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
  <path d="M7 3v4a1 1 0 0 0 1 1h7" />`);
var FolderOpen = makeIcon(`<path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />`);
var RefreshCw = makeIcon(`<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
  <path d="M21 3v5h-5" />
  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
  <path d="M8 16H3v5" />`);
var Clock = makeIcon(`<circle cx="12" cy="12" r="10" />
  <path d="M12 6v6l4 2" />`);
var Users = makeIcon(`<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  <circle cx="9" cy="7" r="4" />`);
var Printer = makeIcon(`<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
  <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
  <rect x="6" y="14" width="12" height="8" rx="1" />`);
var Undo2 = makeIcon(`<path d="M9 14 4 9l5-5" />
  <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />`);
var Edit2 = makeIcon(`<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />`);
var Loader2 = makeIcon(`<path d="M21 12a9 9 0 1 1-6.219-8.56" />`);
var PanelRightClose = makeIcon(`<rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M15 3v18" />
  <path d="m8 9 3 3-3 3" />`);
var PanelRightOpen = makeIcon(`<rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M15 3v18" />
  <path d="m10 15-3-3 3-3" />`);
var GripVertical = makeIcon(`<circle cx="9" cy="12" r="1" />
  <circle cx="9" cy="5" r="1" />
  <circle cx="9" cy="19" r="1" />
  <circle cx="15" cy="12" r="1" />
  <circle cx="15" cy="5" r="1" />
  <circle cx="15" cy="19" r="1" />`);
// ==========================================
// ข้อมูลจำลองและโครงสร้างเริ่มต้น
// ==========================================
const DAYS = ['จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์'];
const DAY_SHORT = {
  'จันทร์': 'จ',
  'อังคาร': 'อ',
  'พุธ': 'พ',
  'พฤหัสบดี': 'พฤ',
  'ศุกร์': 'ศ'
};
const YEARS = Array.from({
  length: 12
}, (_, i) => 2569 + i);
const PERIODS = Array.from({
  length: 11
}, (_, i) => {
  const num = i + 1;
  const pad = n => n.toString().padStart(2, '0');
  const time = `${pad(8 + i)}:20-\n${pad(9 + i)}:20`;
  return {
    id: num,
    time,
    start: `${pad(8 + i)}:20`,
    end: `${pad(9 + i)}:20`,
    rawTime: `${pad(8 + i)}:20 - ${pad(9 + i)}:20`
  };
});
const INITIAL_SUBJECTS = [];
const INITIAL_TEACHERS_DATA = [];
const INITIAL_ROOMS = [];

/**
 * แปลงข้อมูลเก่าที่เก็บห้องเป็นข้อความอิสระ ให้เป็นทะเบียนห้องที่อ้างอิงด้วยรหัส
 *
 * ของเดิมพิมพ์ชื่อห้องลงไปตรงๆ ในแต่ละคาบ ระบบจึงเทียบไม่ได้ว่าห้องชนกันหรือไม่
 * และพิมพ์ "114" กับ "114 " (มีเว้นวรรค) จะกลายเป็นคนละห้อง
 * ฟังก์ชันนี้รวบชื่อห้องทั้งหมดที่เคยใช้มาสร้างเป็นทะเบียน แล้วชี้ทุกคาบไปที่รหัสห้อง
 */
const migrateRooms = parsed => {
  const rooms = Array.isArray(parsed.rooms) ? parsed.rooms.map(r => ({
    ...r
  })) : [];
  const byName = new Map(rooms.map(r => [String(r.name).trim(), r.id]));
  let seq = 0;
  const ensure = raw => {
    const name = String(raw ?? '').trim();
    if (!name) return null;
    if (byName.has(name)) return byName.get(name);
    const id = `r_mig_${Date.now()}_${seq++}`;
    byName.set(name, id);
    rooms.push({
      id,
      name,
      note: ''
    });
    return id;
  };
  const teachers = (parsed.teachers || []).map(t => ({
    ...t,
    roomId: t.roomId || ensure(t.room)
  }));
  const schedule = (parsed.schedule || []).map(s => ({
    ...s,
    roomId: s.roomId || ensure(s.room)
  }));

  // กันรหัสห้องกำพร้า: ไฟล์สำรองบางไฟล์อาจอ้างห้องที่ไม่มีในทะเบียนแล้ว
  // ถ้าปล่อยไว้ ชื่อห้องจะแสดงเป็นค่าว่างและผู้ใช้จะงงว่าทำไมเตือนห้องชนโดยไม่บอกชื่อ
  const valid = new Set(rooms.map(r => r.id));
  const clean = rid => rid && valid.has(rid) ? rid : null;
  return {
    rooms,
    teachers: teachers.map(t => ({
      ...t,
      roomId: clean(t.roomId)
    })),
    schedule: schedule.map(s => ({
      ...s,
      roomId: clean(s.roomId),
      roomName: s.roomName || null
    }))
  };
};

// ชื่อสาขาตามระดับชั้น ปวช. เรียก "ช่างไฟฟ้า" ปวส. เรียก "ไฟฟ้า"
const MAJOR_BY_LEVEL = {
  'ปวช.': 'ช่างไฟฟ้า',
  'ปวส.': 'ไฟฟ้า'
};
const MAX_ROOM_NO = 20;

/**
 * สร้างตัวเลือกให้ช่องดรอปดาวน์ โดยรวมค่าปัจจุบันเข้าไปด้วยเสมอ
 *
 * ถ้าค่าที่เก็บไว้ไม่มีในรายการตัวเลือก เบราว์เซอร์จะแสดงเป็นค่าแรกหรือช่องว่าง
 * ผู้ใช้จึงเห็นเลขไม่ตรงกับข้อมูลจริง พอกดแก้อะไรสักอย่างชื่อห้องก็เพี้ยน
 * ดูเหมือน "แก้แล้วไม่เซฟ" ทั้งที่จริงคือแสดงผลผิดมาตั้งแต่ต้น
 */
const numOptions = (max, current) => {
  const list = Array.from({
    length: max
  }, (_, i) => i + 1);
  const cur = Number(current);
  if (cur && !list.includes(cur)) list.push(cur);
  return list.sort((a, b) => a - b);
};
const yearOptions = (level, current) => numOptions(level === 'ปวส.' ? 2 : 3, current);
const DEFAULT_MAJORS = Object.values(MAJOR_BY_LEVEL);
const INITIAL_CLASSES = [{
  id: 'c1',
  name: 'ช่างไฟฟ้า ปวช. 1/1',
  major: 'ช่างไฟฟ้า',
  level: 'ปวช.',
  year: 1,
  room: 1,
  studentCount: 30,
  advisor: 'ครูอดิศร',
  lunchPeriod: 5
}, {
  id: 'c2',
  name: 'ไฟฟ้า ปวส. 1/1',
  major: 'ไฟฟ้า',
  level: 'ปวส.',
  year: 1,
  room: 1,
  studentCount: 25,
  advisor: 'ครูอดิศักดิ์',
  lunchPeriod: 4
}];
const DATA_KEY = 'timetable-data';
const UI_KEY = 'timetable-ui-state';
const HISTORY_KEY = 'timetable-history';

// เก็บประวัติลงเครื่องแค่ส่วนหนึ่ง เพราะแต่ละขั้นคือสำเนาตารางทั้งชุด
// ถ้าเก็บครบ 60 ขั้นอาจเกินโควตาที่เก็บได้ จึงเก็บเท่าที่จำเป็นต่อการกู้คืน
const HISTORY_PERSIST = 12;
const HISTORY_MAX_BYTES = 2 * 1024 * 1024;

// ยังไม่เลือกปีการศึกษา ผู้ใช้ต้องเลือกเองก่อนเริ่มจัดตาราง
// ป้องกันการเผลอจัดตารางทั้งภาคเรียนแล้วพบว่าปีการศึกษาผิด
const INITIAL_CONFIG = {
  year: '',
  term: 1
};

// ==========================================
// Helper Functions
// ==========================================
const calculateClassSummary = (classId, subjects) => {
  const summary = subjects || [];
  const sumTheory = summary.reduce((sum, s) => sum + Number(s.theory || 0), 0);
  const sumPractical = summary.reduce((sum, s) => sum + Number(s.practical || 0), 0);
  const sumCredit = summary.reduce((sum, s) => sum + Number(s.credit || 0), 0);
  const sumHours = sumTheory + sumPractical;
  return {
    classId,
    summary,
    sumTheory,
    sumPractical,
    sumCredit,
    sumHours
  };
};
const calculateTeacherSummary = (teacherId, currentSchedule, allClassSubjects) => {
  const tSlots = currentSchedule.filter(s => !s.isManualTeacher && s.teacherId === teacherId);
  const summaryMap = {};
  tSlots.forEach(slot => {
    const subj = (allClassSubjects[slot.classId] || []).find(s => s.id === slot.subjectId);
    // วิชานอกแผนก (พิมพ์เองแบบไม่ผูกรหัสวิชา) ต้องนับรวมในชั่วโมงสอนด้วย
    // ไม่งั้นชั่วโมงสอนรวมของครูจะนับขาด ทั้งที่สอนจริงอยู่
    const entry = subj ? {
      key: `${subj.code || ''}_${subj.name}`,
      code: subj.code,
      name: subj.name,
      theory: Number(subj.theory) || 0,
      practical: Number(subj.practical) || 0,
      credit: Number(subj.credit) || 0
    } : slot.subjectName ? {
      key: `ext_${slot.subjectName}`,
      code: '',
      name: slot.subjectName,
      theory: 0,
      practical: 0,
      credit: 0,
      external: true
    } : null;
    if (entry) {
      if (!summaryMap[entry.key]) summaryMap[entry.key] = {
        ...entry,
        hours: 0
      };
      summaryMap[entry.key].hours += 1;
    }
  });
  const summary = Object.values(summaryMap);
  const sumTheory = summary.reduce((sum, item) => sum + item.theory, 0);
  const sumPractical = summary.reduce((sum, item) => sum + item.practical, 0);
  const sumCredit = summary.reduce((sum, item) => sum + item.credit, 0);
  const sumHours = summary.reduce((sum, item) => sum + item.hours, 0);
  return {
    summary,
    sumTheory,
    sumPractical,
    sumCredit,
    sumHours
  };
};

// ชุดสีประจำวิชา — เลือกให้ต่างเฉดชัดเจนบนพื้นขาว อ่านตัวหนังสือได้ทุกสี
/**
 * สรุปการใช้ห้อง — ว่าห้องนี้ถูกใช้เรียนวิชาอะไรบ้าง ห้องเรียนไหน กี่คาบ
 * ใช้โครงเดียวกับสรุปภาระครู จะได้แสดงในตารางเดิมได้เลย
 */
const calculateRoomSummary = (roomId, currentSchedule, allClassSubjects, allClasses, resolveRoom) => {
  const slots = currentSchedule.filter(s => resolveRoom(s) === roomId);
  const map = {};
  slots.forEach(slot => {
    const subj = (allClassSubjects[slot.classId] || []).find(x => x.id === slot.subjectId);
    const cls = allClasses.find(c => c.id === slot.classId);
    // วิชานอกแผนกไม่มีรหัสวิชาผูกไว้ ต้องแยกกลุ่มด้วยชื่อวิชาแทน
    // ไม่งั้นวิชานอกแผนกต่างกันที่สอนในห้องเดียวกันจะถูกนับรวมเป็นแถวเดียวผิดพลาด
    const groupKey = slot.subjectId || (slot.subjectName ? `ext_${slot.subjectName}` : 'none');
    const key = slot.isFixed ? `fx_${slot.label}_${slot.classId}` : `${groupKey}_${slot.classId}`;
    if (!map[key]) {
      map[key] = {
        id: key,
        code: subj?.code || '',
        name: (slot.isFixed ? slot.label : subj?.name || slot.subjectName) || 'ไม่ระบุวิชา',
        className: cls?.name || '',
        theory: Number(subj?.theory) || 0,
        practical: Number(subj?.practical) || 0,
        credit: Number(subj?.credit) || 0,
        colorKey: subj?.colorKey,
        external: !subj && !!slot.subjectName,
        hours: 0
      };
    }
    map[key].hours += 1;
  });
  const summary = Object.values(map).sort((a, b) => a.className.localeCompare(b.className, 'th'));
  return {
    summary,
    sumTheory: summary.reduce((a, x) => a + x.theory, 0),
    sumPractical: summary.reduce((a, x) => a + x.practical, 0),
    sumCredit: summary.reduce((a, x) => a + x.credit, 0),
    sumHours: summary.reduce((a, x) => a + x.hours, 0)
  };
};
const SUBJECT_COLORS = [{
  key: 'ฟ้า',
  bg: '#DDE8FB',
  line: '#8FB3E8',
  text: '#12376E'
}, {
  key: 'เขียว',
  bg: '#DCEFE3',
  line: '#8CC7A6',
  text: '#0F5136'
}, {
  key: 'ส้ม',
  bg: '#FBE7D3',
  line: '#EDB27B',
  text: '#7A3F07'
}, {
  key: 'ม่วง',
  bg: '#E7E0F5',
  line: '#B49FE0',
  text: '#402A73'
}, {
  key: 'แดง',
  bg: '#F9DEDF',
  line: '#E79CA1',
  text: '#7A1620'
}, {
  key: 'ฟ้าน้ำทะเล',
  bg: '#D6EDEE',
  line: '#84C4C7',
  text: '#0D4C50'
}, {
  key: 'เหลือง',
  bg: '#F7EDCC',
  line: '#DFC777',
  text: '#6B4E06'
}, {
  key: 'ชมพู',
  bg: '#F8E0EC',
  line: '#E9A3C4',
  text: '#75204B'
}];
const colorByKey = key => SUBJECT_COLORS.find(c => c.key === key) || SUBJECT_COLORS[0];

/**
 * สีแท็บห้องเรียนตามระดับชั้นและชั้นปี — ปวช. ไล่โทนเลือดหมูแดงเข้ม ปวส. ไล่โทนน้ำเงิน
 * ชั้นปีต้น (1) สีอ่อน ชั้นปีท้าย (สูงสุดของระดับนั้น) สีเข้มที่สุด
 * ใช้เป็นเส้นขอบบนของแท็บ + สีตัวหนังสือ ไม่ทำเป็นพื้นทึบ เพื่อให้อ่านชื่อห้องได้ชัดเจนทุกสถานะ
 */
const classTabColor = item => {
  if (!item || !item.level) return null;
  const isPvs = item.level === 'ปวส.';
  const maxYear = isPvs ? 2 : 3;
  const y = Math.min(Math.max(Number(item.year) || 1, 1), maxYear);
  const t = maxYear > 1 ? (y - 1) / (maxYear - 1) : 0; // 0 = ปีแรก (อ่อนสุด), 1 = ปีสุดท้าย (เข้มสุด)
  const hue = isPvs ? 213 : 350;
  const sat = isPvs ? 60 : 56;
  const bgL = 93 - t * 21; // พื้นหลังแท็บตอนยังไม่เลือก: อ่อนไปเข้มตามปี
  const accentL = 46 - t * 24; // เส้นขอบบน + ตัวหนังสือ: เข้มขึ้นตามปี ให้อ่านออกทุกเฉด
  return {
    bg: `hsl(${hue} ${sat}% ${bgL}%)`,
    accent: `hsl(${hue} ${Math.min(sat + 6, 72)}% ${accentL}%)`
  };
};

// ==========================================
// ระบบพิมพ์ — ขนาดกระดาษ A4 แนวนอนที่ 96 DPI
// 1122 x 793 px = 297 x 210 mm พอดี
// ==========================================
const PAGE_W = 1122;
const PAGE_H = 793;

/**
 * ฟอนต์เดียวทั้งระบบ ใช้ที่ติดตั้งในเครื่อง ไม่ดึงจากอินเทอร์เน็ต
 *
 * เหตุผลที่ไม่ดึงจากภายนอก: หน้าที่แชร์ออกไปมีนโยบายความปลอดภัยเข้มกว่าในแชท
 * การดึงฟอนต์หรือสคริปต์จากภายนอกจะถูกบล็อกจนหน้าเว็บไม่ขึ้นเลย
 * และเครือข่ายในสถานศึกษาหลายแห่งก็บล็อก CDN อยู่แล้ว
 *
 * เหตุผลที่ไม่ใช้ฟอนต์ monospace แยกสำหรับตัวเลข: ฟอนต์ monospace ไม่มีอักษรไทย
 * ข้อความผสมอย่าง "2569 · ภาค 2" จะได้เลขฟอนต์หนึ่งกับคำไทยอีกฟอนต์หนึ่ง ดูไม่เข้ากัน
 * จึงใช้ฟอนต์เดียวแล้วเปิดคุณสมบัติเลขความกว้างเท่ากันแทน เพื่อให้คอลัมน์ตัวเลขยังเรียงตรง
 *
 * ลำดับเริ่มจาก TH Sarabun New ซึ่งเป็นฟอนต์มาตรฐานราชการ
 * ทำให้เอกสารที่พิมพ์ออกมาหน้าตาตรงกับเอกสารอื่นของแผนก
 */
const PRINT_FONT = "'TH Sarabun New','TH SarabunPSK','Sarabun','Leelawadee UI','Noto Sans Thai',Tahoma,sans-serif";

// ล้างอักขระที่ใช้ตั้งชื่อไฟล์ไม่ได้ใน Windows/macOS
const safeFilename = name => name.replace(/[\/\\:*?"<>|]/g, '-').replace(/\s+/g, ' ').trim();

// หนีอักขระก่อนนำไปประกอบเป็นไฟล์ HTML
const escapeHtml = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * CSS สำหรับสั่งพิมพ์ ใช้ร่วมกันทั้งการพิมพ์ในแอปและไฟล์ที่ดาวน์โหลดออกไป
 * เพื่อให้ผลลัพธ์เหมือนกันทั้งสองทาง
 */
const PRINT_PAGE_CSS = `
  @page{ size:${PAGE_W}px ${PAGE_H}px; margin:0; }
  .pdf-page{
    box-shadow:none !important; margin:0 !important; border:0 !important;
    width:${PAGE_W}px !important; height:${PAGE_H}px !important;
    overflow:hidden; background:#fff;
    font-variant-numeric:tabular-nums; font-feature-settings:'tnum' 1;
    page-break-after:always; break-after:page;
    page-break-inside:avoid; break-inside:avoid;
  }
  .pdf-page:last-child{ page-break-after:auto; break-after:auto; }
`;

// รองรับข้อมูลเก่าที่เก็บสีเป็น class ของ tailwind
const normalizeSubjectColor = (subject, fallbackIndex = 0) => {
  if (!subject) return SUBJECT_COLORS[0];
  if (subject.colorKey) return colorByKey(subject.colorKey);
  const legacy = subject.color || '';
  if (legacy.includes('blue')) return SUBJECT_COLORS[0];
  if (legacy.includes('green')) return SUBJECT_COLORS[1];
  if (legacy.includes('orange')) return SUBJECT_COLORS[2];
  if (legacy.includes('purple')) return SUBJECT_COLORS[3];
  if (legacy.includes('red')) return SUBJECT_COLORS[4];
  if (legacy.includes('teal')) return SUBJECT_COLORS[5];
  if (legacy.includes('yellow')) return SUBJECT_COLORS[6];
  if (legacy.includes('pink')) return SUBJECT_COLORS[7];
  return SUBJECT_COLORS[fallbackIndex % SUBJECT_COLORS.length];
};

// สีกลางสำหรับวิชานอกแผนก (พิมพ์ชื่อเอง ไม่ผูกกับรายวิชาในหลักสูตร) — เทาให้ต่างจากสีวิชาปกติชัดเจน
const EXTERNAL_SUBJECT_PAL = {
  key: 'นอกแผนก',
  bg: '#E7E9EF',
  line: '#7C8AA6',
  text: '#33415C'
};

// ==========================================
// ชิ้นส่วน UI ที่ใช้ซ้ำ
// ==========================================

// แถบขีดนับคาบ — 1 ขีด = 1 คาบตามหลักสูตร ขีดทึบ = จัดลงตารางแล้ว
const TickRail = ({
  required,
  placed
}) => {
  const req = Math.max(0, Number(required) || 0);
  const done = Math.max(0, Number(placed) || 0);
  const over = Math.max(0, done - req);
  return /*#__PURE__*/React.createElement("div", {
    className: "tick-rail",
    title: `จัดแล้ว ${done} จาก ${req} คาบ`
  }, Array.from({
    length: req
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: `tick ${i < done ? 'tick-on' : ''}`
  })), Array.from({
    length: over
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: `o${i}`,
    className: "tick tick-over"
  })), req === 0 && over === 0 && /*#__PURE__*/React.createElement("span", {
    className: "tick-none"
  }, "—"));
};
const Segmented = ({
  value,
  onChange,
  options
}) => /*#__PURE__*/React.createElement("div", {
  className: "seg"
}, options.map(o => /*#__PURE__*/React.createElement("button", {
  key: o.value,
  onClick: () => onChange(o.value),
  className: `seg-btn ${value === o.value ? 'seg-on' : ''}`
}, o.icon, o.label)));
function TimetableApp() {
  // ==========================================
  // 1. State
  // ==========================================
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasSavedData, setHasSavedData] = useState(false);
  const [step, setStep] = useState('home');
  const [classes, setClasses] = useState(INITIAL_CLASSES);
  const [classSubjects, setClassSubjects] = useState({
    'c1': INITIAL_SUBJECTS,
    'c2': []
  });
  const [teachers, setTeachers] = useState(INITIAL_TEACHERS_DATA);
  const [rooms, setRooms] = useState(INITIAL_ROOMS);
  const [config, setConfig] = useState(INITIAL_CONFIG);
  const [schedule, setSchedule] = useState([]);
  const [currentClass, setCurrentClass] = useState('');
  const [currentTeacherTab, setCurrentTeacherTab] = useState('');
  const [currentRoomTab, setCurrentRoomTab] = useState('');
  const [viewMode, setViewMode] = useState('student');
  const [panelOpen, setPanelOpen] = useState(true);
  const [copySourceClassId, setCopySourceClassId] = useState('');
  const [isClassModalOpen, setIsClassModalOpen] = useState(false);
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [isDataModalOpen, setIsDataModalOpen] = useState(false);
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [auditResult, setAuditResult] = useState(null);
  const [isTermModalOpen, setIsTermModalOpen] = useState(false);
  const [editingSlot, setEditingSlot] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [isManualSubject, setIsManualSubject] = useState(false); // วิชานอกแผนก พิมพ์ชื่อเอง ไม่ผูกกับหลักสูตร
  const [manualSubjectName, setManualSubjectName] = useState('');
  // กลุ่มนักเรียนนอกแผนก (มาเรียนกับครูในแผนกเราเป็นครั้งคราว) — ต่างจาก isManualSubject ตรงที่ต้องสร้าง "ห้องเรียน" เสมือนขึ้นมาด้วย
  // เพราะระบบทั้งหมดผูกกับ classId เป็นหลัก จึงต้องมีห้องเรียนจริงให้ยึดแม้จะเป็นห้องนอกแผนก
  const [isManualClass, setIsManualClass] = useState(false);
  const [manualClassName, setManualClassName] = useState('');
  const [extSubjectForm, setExtSubjectForm] = useState({
    code: '',
    name: '',
    theory: 0,
    practical: 0,
    credit: 0
  });
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [isManualTeacher, setIsManualTeacher] = useState(false);
  const [manualTeacherName, setManualTeacherName] = useState('');
  const [selectedDuration, setSelectedDuration] = useState(1);
  const [deleteCount, setDeleteCount] = useState(1); // จำนวนคาบที่จะลบ ตั้งค่าตอนเปิดหน้าต่าง
  const [customRoomId, setCustomRoomId] = useState('');
  const [isManualRoom, setIsManualRoom] = useState(false); // ห้องนอกแผนก พิมพ์ชื่อเอง
  const [manualRoomName, setManualRoomName] = useState('');
  const [saveRoomToRegistry, setSaveRoomToRegistry] = useState(true);
  const [allowOverlap, setAllowOverlap] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [editingTabId, setEditingTabId] = useState(null);
  const [editTabName, setEditTabName] = useState('');
  const [draggedTabId, setDraggedTabId] = useState(null);
  const [draggedSubjectId, setDraggedSubjectId] = useState(null); // ตัวจับว่ากำลังลากรายวิชาไหนอยู่ ในหน้าต่างจัดการวิชา

  const [printMode, setPrintMode] = useState('none');
  const [pdfError, setPdfError] = useState('');
  const [history, setHistory] = useState([]);
  const [lastSavedTime, setLastSavedTime] = useState(null);
  const isFirstSaveRender = useRef(true);
  const [saveStatus, setSaveStatus] = useState('idle');
  const historyPersistRef = useRef(null);
  const saveTimeoutRef = useRef(null);
  const [alertDialog, setAlertDialog] = useState({
    isOpen: false,
    message: ''
  });

  // แถบแจ้งผลการย้ายคาบ พร้อมปุ่มย้อนกลับ
  const [toast, setToast] = useState(null);
  const toastTimerRef = useRef(null);
  const dismissToast = () => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = null;
    setToast(null);
  };
  const showToast = t => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast(t);
    toastTimerRef.current = setTimeout(() => setToast(null), 6000);
  };
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    action: null,
    payload: null,
    title: '',
    message: '',
    confirmText: 'ยืนยัน',
    cancelText: 'ยกเลิก',
    isDestructive: true
  });
  const [newClassForm, setNewClassForm] = useState({
    major: MAJOR_BY_LEVEL['ปวช.'],
    level: 'ปวช.',
    year: 1,
    room: 1,
    studentCount: '',
    advisor: ''
  });
  const [newTeacherForm, setNewTeacherForm] = useState({
    name: '',
    roomId: ''
  });
  const [newRoomForm, setNewRoomForm] = useState({
    name: '',
    note: ''
  });
  const [editingRoomId, setEditingRoomId] = useState(null);
  const [editRoomForm, setEditRoomForm] = useState({
    name: '',
    note: ''
  });
  const [newSubjectForm, setNewSubjectForm] = useState({
    code: '',
    name: '',
    theory: 0,
    practical: 0,
    credit: 0,
    colorKey: ''
  });
  const [editingTeacherId, setEditingTeacherId] = useState(null);
  const [editTeacherForm, setEditTeacherForm] = useState({
    name: '',
    roomId: ''
  });
  const [modalClassId, setModalClassId] = useState('');
  const [editingSubjectId, setEditingSubjectId] = useState(null);
  const [editSubjectForm, setEditSubjectForm] = useState({
    code: '',
    name: '',
    theory: 0,
    practical: 0,
    credit: 0,
    colorKey: ''
  });

  // ==========================================
  // 2. Derived State
  // ==========================================
  // ห้องเรียนของแผนกเท่านั้น ไม่รวมกลุ่มนักเรียนนอกแผนกที่มาเรียนกับครูเป็นครั้งคราว
  // ใช้แทน `classes` ในจุดที่ต้องแสดง "ห้องเรียนของเราจริงๆ" เช่น แท็บ, สถิติหน้าแรก, พิมพ์ตารางทุกห้อง
  // ต้องประกาศก่อน activeClassObj เพราะถูกใช้ในบรรทัดถัดไปทันที
  const deptClasses = classes.filter(c => !c.external);
  const activeClassObj = classes.find(c => c.id === currentClass) || deptClasses[0] || {};
  const activeLunchPeriod = activeClassObj.lunchPeriod || 5;
  const activeTeacherObj = teachers.find(t => t.id === currentTeacherTab) || {};
  const activeRoomObj = rooms.find(r => r.id === currentRoomTab) || {};

  // ==========================================
  // ทะเบียนห้อง
  // ==========================================
  const roomById = id => rooms.find(r => r.id === id);
  const roomLabel = id => roomById(id)?.name || '';

  // ห้องของแผนก ใช้เป็นแท็บในมุมมองตารางห้อง
  // ห้องนอกแผนกไม่นับ เพราะเป็นห้องที่แผนกอื่นดูแล เราไม่รู้ตารางเต็มของเขา
  const deptRooms = rooms.filter(r => !r.external);

  // ห้องที่คาบนี้ใช้จริง ถ้าคาบไม่ได้ระบุ ให้ถือว่าใช้ห้องประจำของครู
  const slotRoomId = slot => {
    if (!slot) return null;
    if (slot.roomId) return slot.roomId;
    if (slot.isManualTeacher || !slot.teacherId) return null;
    return teachers.find(t => t.id === slot.teacherId)?.roomId || null;
  };

  // ชื่อห้องที่จะแสดงบนตารางและเอกสาร รองรับทั้งห้องในทะเบียนและห้องที่พิมพ์เอง
  const slotRoomText = slot => roomLabel(slotRoomId(slot)) || slot && slot.roomName || '';

  /**
   * ข้อมูลวิชาของคาบนี้ รองรับทั้งวิชาในหลักสูตร (ผูก subjectId) และวิชานอกแผนกที่พิมพ์เอง (subjectName)
   * ใช้แทนที่การ .find() ในหลักสูตรตรงๆ ทุกจุดที่ต้องแสดงชื่อ/รหัส/สีของวิชาบนคาบ
   */
  const slotSubjectInfo = slot => {
    if (!slot) return null;
    if (slot.subjectId) {
      const s = (classSubjects[slot.classId] || []).find(x => x.id === slot.subjectId);
      if (s) return {
        name: s.name,
        code: s.code || '',
        pal: normalizeSubjectColor(s),
        external: false
      };
    }
    if (slot.subjectName) return {
      name: slot.subjectName,
      code: '',
      pal: EXTERNAL_SUBJECT_PAL,
      external: true
    };
    return null;
  };
  const activeModalClassId = modalClassId || currentClass;
  const currentSubjectObj = (classSubjects[activeModalClassId] || []).find(s => s.id === selectedSubject);
  // วิชานอกแผนกไม่มีจำนวนคาบตามหลักสูตรผูกไว้ ให้เลือกได้อิสระสูงสุดเท่าคาบทั้งวัน
  // วิชานอกแผนก/กลุ่มนอกแผนก ไม่มีจำนวนคาบตามหลักสูตรผูกไว้แน่นอน — ให้เลือกได้อิสระตามที่กรอก หรือเต็มวันถ้ายังไม่กรอก
  const extManualHours = Number(extSubjectForm.theory || 0) + Number(extSubjectForm.practical || 0);
  const maxDuration = isManualClass ? extManualHours > 0 ? extManualHours : 11 : isManualSubject ? 11 : currentSubjectObj ? Number(currentSubjectObj.theory) + Number(currentSubjectObj.practical) : 1;
  let sidebarData = {
    summary: [],
    sumTheory: 0,
    sumPractical: 0,
    sumCredit: 0,
    sumHours: 0
  };
  if (viewMode === 'student') {
    sidebarData = calculateClassSummary(currentClass, classSubjects[currentClass]);
  } else if (viewMode === 'teacher') {
    sidebarData = calculateTeacherSummary(currentTeacherTab, schedule, classSubjects);
  } else if (viewMode === 'room') {
    sidebarData = calculateRoomSummary(currentRoomTab, schedule, classSubjects, classes, slotRoomId);
  }
  const {
    summary: sidebarSummary,
    sumTheory,
    sumPractical,
    sumCredit,
    sumHours
  } = sidebarData;

  // ความคืบหน้าการจัดตารางของห้องปัจจุบัน
  const classProgress = (() => {
    if (viewMode !== 'student') return null;
    const subs = classSubjects[currentClass] || [];
    const required = subs.reduce((a, s) => a + Number(s.theory || 0) + Number(s.practical || 0), 0);
    const placed = schedule.filter(s => s.classId === currentClass && s.subjectId).length;
    return {
      required,
      placed
    };
  })();

  // ==========================================
  // 3. Effects
  // ==========================================
  useEffect(() => {
    let cancelled = false;
    (async () => {
      let loadedClasses = null;
      try {
        const res = await window.storage.get(DATA_KEY, false);
        if (res && res.value && !cancelled) {
          const parsed = JSON.parse(res.value);
          const migratedClasses = (parsed.classes || INITIAL_CLASSES).map(c => ({
            ...c,
            lunchPeriod: c.lunchPeriod || 5,
            level: c.level || 'ปวช.',
            year: c.year || 1,
            room: c.room || 1
          }));
          // แปลงสีวิชาแบบเก่าให้เป็นระบบสีใหม่
          const migratedSubjects = {};
          Object.entries(parsed.classSubjects || {}).forEach(([cid, list]) => {
            migratedSubjects[cid] = (list || []).map((s, i) => ({
              ...s,
              colorKey: s.colorKey || normalizeSubjectColor(s, i).key
            }));
          });
          // แปลงห้องที่เคยเก็บเป็นข้อความอิสระ ให้เป็นทะเบียนห้องที่เทียบกันได้
          const mig = migrateRooms(parsed);
          loadedClasses = migratedClasses;
          setClasses(migratedClasses);
          setClassSubjects(migratedSubjects);
          setTeachers(mig.teachers);
          setRooms(mig.rooms);
          setConfig({
            term: parsed.config?.term || 1,
            year: parsed.config?.year || ''
          });
          setSchedule(mig.schedule);
          setLastSavedTime(parsed.lastSaved || null);
          setHasSavedData(true);
        }
      } catch (e) {/* ยังไม่เคยบันทึก */}
      try {
        const uiRes = await window.storage.get(UI_KEY, false);
        if (uiRes && uiRes.value && !cancelled) {
          const uiParsed = JSON.parse(uiRes.value);
          if (uiParsed.step) setStep(uiParsed.step);
          if (uiParsed.currentTeacherTab) setCurrentTeacherTab(uiParsed.currentTeacherTab);
          if (uiParsed.currentRoomTab) setCurrentRoomTab(uiParsed.currentRoomTab);
          if (uiParsed.viewMode) setViewMode(uiParsed.viewMode);
          if (typeof uiParsed.panelOpen === 'boolean') setPanelOpen(uiParsed.panelOpen);
          if (uiParsed.currentClass) setCurrentClass(uiParsed.currentClass);else if (loadedClasses && loadedClasses[0]) setCurrentClass(loadedClasses[0].id);
        } else if (loadedClasses && loadedClasses[0]) {
          setCurrentClass(loadedClasses[0].id);
        }
      } catch (e) {
        if (loadedClasses && loadedClasses[0]) setCurrentClass(loadedClasses[0].id);
      }

      // กู้ประวัติย้อนกลับที่เก็บไว้ ให้ยังกดย้อนได้แม้เพิ่งรีเฟรชหน้า
      try {
        const h = await window.storage.get(HISTORY_KEY, false);
        if (h && h.value && !cancelled) {
          const arr = JSON.parse(h.value);
          if (Array.isArray(arr) && arr.length) setHistory(arr);
        }
      } catch (e) {/* ไม่มีประวัติเก็บไว้ */}
      if (!cancelled) setIsLoaded(true);
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  useEffect(() => {
    if (!isLoaded) return;
    (async () => {
      try {
        await window.storage.set(UI_KEY, JSON.stringify({
          step,
          currentClass,
          currentTeacherTab,
          currentRoomTab,
          viewMode,
          panelOpen
        }), false);
      } catch (e) {/* เงียบ */}
    })();
  }, [step, currentClass, currentTeacherTab, currentRoomTab, viewMode, panelOpen, isLoaded]);
  useEffect(() => {
    if (!isLoaded) return;
    if (isFirstSaveRender.current) {
      isFirstSaveRender.current = false;
      return;
    }
    setSaveStatus('saving');
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      const now = new Date().toLocaleTimeString('th-TH', {
        hour: '2-digit',
        minute: '2-digit'
      });
      const dataToSave = {
        classes,
        classSubjects,
        config,
        schedule,
        teachers,
        rooms,
        lastSaved: now
      };
      (async () => {
        try {
          await window.storage.set(DATA_KEY, JSON.stringify(dataToSave), false);
          setLastSavedTime(now);
          setHasSavedData(true);
          setSaveStatus('saved');
        } catch (e) {
          console.error('Storage save error:', e);
          setSaveStatus('error');
        }
      })();
    }, 700);
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, [classes, classSubjects, config, schedule, teachers, rooms, isLoaded]);

  /**
   * เก็บประวัติย้อนกลับลงเครื่อง
   *
   * เดิมประวัติอยู่ในหน่วยความจำอย่างเดียว แต่บันทึกอัตโนมัติเขียนทับทันที
   * เผลอลบแล้วรีเฟรชจึงกู้ไม่ได้เลย ซึ่งเป็นความเสี่ยงสูงสุดที่เหลืออยู่
   * เก็บย้อนหลัง 12 ขั้นก็พอกู้จากความผิดพลาดทั่วไปได้ โดยไม่กินที่มากเกิน
   */
  useEffect(() => {
    if (!isLoaded) return;
    if (historyPersistRef.current) clearTimeout(historyPersistRef.current);
    historyPersistRef.current = setTimeout(() => {
      (async () => {
        try {
          const slice = history.slice(-HISTORY_PERSIST);
          let payload = JSON.stringify(slice);
          // ถ้าใหญ่เกินไป ตัดขั้นเก่าออกจนพอดี ดีกว่าบันทึกไม่สำเร็จแล้วไม่เหลืออะไรเลย
          let n = slice.length;
          while (payload.length > HISTORY_MAX_BYTES && n > 1) {
            n = Math.floor(n / 2);
            payload = JSON.stringify(slice.slice(-n));
          }
          await window.storage.set(HISTORY_KEY, payload, false);
        } catch (e) {/* เก็บไม่ได้ก็ไม่เป็นไร ยังใช้ประวัติในหน่วยความจำได้ */}
      })();
    }, 1500);
    return () => {
      if (historyPersistRef.current) clearTimeout(historyPersistRef.current);
    };
  }, [history, isLoaded]);
  useEffect(() => {
    if (viewMode === 'teacher' && teachers.length > 0 && !teachers.find(t => t.id === currentTeacherTab)) {
      setCurrentTeacherTab(teachers[0].id);
    }
    if (viewMode === 'room' && deptRooms.length > 0 && !deptRooms.find(r => r.id === currentRoomTab)) {
      setCurrentRoomTab(deptRooms[0].id);
    }
  }, [viewMode, teachers, currentTeacherTab, rooms, currentRoomTab]);

  /**
   * รีเซ็ตตำแหน่งเลื่อนหน้าจอกลับขึ้นบนสุดทุกครั้งที่สลับ "หน้า"
   *
   * แอปนี้ไม่ได้ใช้ routing จริง แต่สลับเนื้อหาด้วย step/printMode ในคอมโพเนนต์เดียว
   * เบราว์เซอร์จึงไม่รีเซ็ตตำแหน่งเลื่อนให้อัตโนมัติเหมือนตอนโหลดหน้าใหม่จริงๆ
   * ถ้าเลื่อนดูหน้าตัวอย่างก่อนพิมพ์ (ซึ่งยาวมากเพราะซ้อนหลายแผ่นกระดาษ) จนสุดท้าย
   * แล้วกด "กลับหน้าแรก" ตำแหน่งเลื่อนจะค้างอยู่ต่ำ ทำให้หน้าแรกซึ่งสั้นกว่ามาก
   * ดูเหมือนไม่อยู่กึ่งกลางจอ ทั้งที่จริงอยู่กึ่งกลางอยู่แล้วแค่เลื่อนไม่ถึง
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step, printMode]);

  // ปิดหน้าต่างด้วยปุ่ม Esc และย้อนกลับด้วย Ctrl+Z
  useEffect(() => {
    const onKey = e => {
      const anyModalOpen = alertDialog.isOpen || confirmDialog.isOpen || editingSlot || isSubjectModalOpen || isClassModalOpen || isTeacherModalOpen || isDataModalOpen || isRoomModalOpen || auditResult || isTermModalOpen;

      // Ctrl+Z ย้อนกลับ แต่ต้องไม่แย่งการทำงานปกติของช่องพิมพ์
      // (ในช่องพิมพ์ Ctrl+Z ควรย้อนตัวอักษร ไม่ใช่ย้อนการจัดตาราง)
      if ((e.ctrlKey || e.metaKey) && !e.shiftKey && (e.key === 'z' || e.key === 'Z')) {
        const el = e.target;
        const inField = el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
        if (!inField && !anyModalOpen) {
          e.preventDefault();
          handleUndo();
        }
        return;
      }
      if (e.key !== 'Escape') return;
      if (alertDialog.isOpen) return setAlertDialog({
        isOpen: false,
        message: ''
      });
      if (confirmDialog.isOpen) return setConfirmDialog(prev => ({
        ...prev,
        isOpen: false
      }));
      if (editingSlot) return setEditingSlot(null);
      if (isSubjectModalOpen) return safeCloseModal(editingSubjectId, () => setIsSubjectModalOpen(false));
      if (isClassModalOpen) return setIsClassModalOpen(false);
      if (isTeacherModalOpen) return safeCloseModal(editingTeacherId, () => setIsTeacherModalOpen(false));
      if (isDataModalOpen) return setIsDataModalOpen(false);
      if (isRoomModalOpen) return safeCloseModal(editingRoomId, () => setIsRoomModalOpen(false));
      if (auditResult) return setAuditResult(null);
      if (isTermModalOpen) return setIsTermModalOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // ต้องมี history ด้วย ไม่งั้นตัวจัดการปุ่มจะจับภาพประวัติค้างไว้ แล้ว Ctrl+Z จะย้อนไปผิดขั้น
    // ต้องมี editingSubjectId/editingTeacherId/editingRoomId ด้วย เพราะ safeCloseModal ใช้ค่าล่าสุดเช็คฉบับร่างค้าง
  }, [alertDialog.isOpen, confirmDialog.isOpen, editingSlot, isSubjectModalOpen, isClassModalOpen, isTeacherModalOpen, isDataModalOpen, isRoomModalOpen, auditResult, isTermModalOpen, history, editingSubjectId, editingTeacherId, editingRoomId]);

  // ไม่มีการโหลดฟอนต์หรือสคริปต์จากภายนอกอีกต่อไป
  // แอปทำงานได้เต็มรูปแบบแม้ไม่มีอินเทอร์เน็ต

  // ==========================================
  // 4. Helpers
  // ==========================================
  const customAlert = message => setAlertDialog({
    isOpen: true,
    message
  });

  /**
   * ปิดหน้าต่างแบบปลอดภัย — เช็คก่อนว่ามีฉบับร่างที่ยังไม่กดบันทึกค้างอยู่ไหม
   *
   * ปัญหาเดิม: การแก้ไขรายการในทะเบียน (วิชา/ครู/ห้อง) เก็บไว้ในฉบับร่างชั่วคราว
   * ต้องกดปุ่ม "บันทึก" เล็กๆ ในแถวนั้นก่อนจึงจะเขียนลงระบบจริง
   * แต่ปุ่ม X และ Esc ไม่เคยเช็คเลยว่ามีฉบับร่างค้างอยู่หรือไม่ ปิดแล้วข้อมูลหายเงียบๆ ทันที
   * ฟังก์ชันนี้กันไว้: ถ้ามีฉบับร่างค้าง จะไม่ปิดหน้าต่าง แต่แจ้งเตือนให้กดบันทึกหรือยกเลิกก่อน
   */
  const safeCloseModal = (isEditingId, closeFn) => {
    if (isEditingId) {
      customAlert('มีรายการที่กำลังแก้ไขค้างอยู่ กดปุ่ม "บันทึก" หรือ "ยกเลิก" ในแถวนั้นก่อน ไม่งั้นการแก้ไขจะหายไป');
      return;
    }
    closeFn();
  };
  const requestConfirm = (action, payload, title, message, confirmText = 'ยืนยัน', cancelText = 'ยกเลิก', isDestructive = true) => {
    setConfirmDialog({
      isOpen: true,
      action,
      payload,
      title,
      message,
      confirmText,
      cancelText,
      isDestructive
    });
  };
  const getSlotData = (classId, day, period) => schedule.find(s => s.classId === classId && s.day === day && s.period === period);
  const getSlotsForTeacher = (teacherId, day, period) => schedule.filter(s => !s.isManualTeacher && s.teacherId === teacherId && s.day === day && s.period === period);
  const getSlotsForRoom = (roomId, day, period) => schedule.filter(s => slotRoomId(s) === roomId && s.day === day && s.period === period);

  /**
   * สแกนทั้งตารางหาปัญหาที่มีอยู่แล้ว
   *
   * ระบบเตือนเฉพาะตอนวางคาบใหม่ แต่ตารางที่นำเข้าจากไฟล์เก่า
   * หรือที่เคยติ๊ก "ให้สอนซ้อนเวลาได้" ไว้ ไม่มีทางรู้ว่ามีปัญหาค้างอยู่กี่จุด
   * โดยเฉพาะห้องชน ซึ่งระบบเดิมไม่เคยตรวจเลย ตารางเก่าจึงอาจมีอยู่โดยไม่รู้ตัว
   */
  const auditSchedule = () => {
    const issues = [];
    const clsName = id => classes.find(c => c.id === id)?.name || 'ไม่ทราบห้องเรียน';
    DAYS.forEach(day => {
      for (let period = 1; period <= 11; period++) {
        const at = schedule.filter(s => s.day === day && s.period === period);

        // ห้องเรียนเดียวกันมีสองวิชาในคาบเดียวกัน
        const byClass = {};
        at.forEach(s => {
          (byClass[s.classId] = byClass[s.classId] || []).push(s);
        });
        Object.entries(byClass).forEach(([cid, list]) => {
          if (list.length > 1) {
            const names = list.map(x => x.isFixed ? x.label : (classSubjects[cid] || []).find(y => y.id === x.subjectId)?.name || 'ไม่ทราบวิชา');
            issues.push({
              type: 'class',
              day,
              period,
              classId: cid,
              title: `${clsName(cid)} เรียน ${list.length} วิชาพร้อมกัน`,
              detail: names.join(' + ')
            });
          }
        });

        // ครูคนเดียวสอนหลายห้องเรียนพร้อมกัน
        const byTeacher = {};
        at.forEach(s => {
          if (s.isFixed) return;
          const key = s.isManualTeacher ? `n:${(s.teacherName || '').trim()}` : `t:${s.teacherId || ''}`;
          if (key === 't:' || key === 'n:') return;
          (byTeacher[key] = byTeacher[key] || []).push(s);
        });
        Object.entries(byTeacher).forEach(([key, list]) => {
          const uniq = [...new Set(list.map(x => x.classId))];
          if (uniq.length > 1) {
            const nm = key.startsWith('n:') ? key.slice(2) : teachers.find(t => t.id === key.slice(2))?.name || 'ไม่ทราบครู';
            issues.push({
              type: 'teacher',
              day,
              period,
              classId: uniq[0],
              title: `${nm} สอน ${uniq.length} ห้องพร้อมกัน`,
              detail: uniq.map(clsName).join(' + ')
            });
          }
        });

        // ห้องเดียวถูกใช้โดยหลายห้องเรียนพร้อมกัน
        const byRoom = {};
        at.forEach(s => {
          const rid = slotRoomId(s);
          if (!rid) return;
          (byRoom[rid] = byRoom[rid] || []).push(s);
        });
        Object.entries(byRoom).forEach(([rid, list]) => {
          const uniq = [...new Set(list.map(x => x.classId))];
          if (uniq.length > 1) {
            issues.push({
              type: 'room',
              day,
              period,
              classId: uniq[0],
              roomId: rid,
              title: `ห้อง ${roomLabel(rid)} ถูกใช้ ${uniq.length} ห้องเรียนพร้อมกัน`,
              detail: uniq.map(clsName).join(' + ')
            });
          }
        });
      }
    });

    // วิชาที่ลงตารางไม่ครบหรือเกินหลักสูตร
    const shortages = [];
    deptClasses.forEach(c => {
      (classSubjects[c.id] || []).forEach(sub => {
        const required = Number(sub.theory || 0) + Number(sub.practical || 0);
        const placed = schedule.filter(s => s.classId === c.id && s.subjectId === sub.id).length;
        if (required > 0 && placed !== required) {
          shortages.push({
            type: placed < required ? 'short' : 'over',
            classId: c.id,
            title: `${c.name} · ${sub.name}`,
            detail: placed < required ? `ลงแล้ว ${placed}/${required} คาบ ขาดอีก ${required - placed}` : `ลงเกินหลักสูตร ${placed}/${required} คาบ`
          });
        }
      });
    });
    return {
      conflicts: issues,
      shortages
    };
  };

  /**
   * บันทึกสถานะก่อนแก้ไข เพื่อให้ย้อนกลับได้
   *
   * ปัญหาเดิม: ช่องพิมพ์อย่างสาขางานหรือจำนวนนักเรียนเรียกฟังก์ชันนี้ทุกตัวอักษร
   * พิมพ์ "ช่างไฟฟ้ากำลัง" ครั้งเดียวกินประวัติไป 13 ขั้นจากทั้งหมด 20 ขั้น
   * ประวัติการวางคาบที่มีค่าจริงถูกดันหายหมด ปุ่มย้อนกลับจึงใช้ไม่ได้
   *
   * วิธีแก้: ส่ง tag มาด้วยสำหรับช่องพิมพ์ ถ้าเป็น tag เดิมและพิมพ์ต่อเนื่องกัน
   * จะไม่บันทึกขั้นใหม่ เพราะขั้นที่บันทึกไว้ตอนเริ่มพิมพ์คือสถานะก่อนแก้อยู่แล้ว
   * ผลคือการพิมพ์รวดเดียวในช่องหนึ่ง = ย้อนกลับ 1 ครั้ง เหมือนโปรแกรมแก้ข้อความทั่วไป
   * หยุดพิมพ์เกิน 1.2 วินาที หรือย้ายไปช่องอื่น จะเริ่มนับเป็นขั้นใหม่
   */
  const HISTORY_LIMIT = 60;
  const TYPING_GAP_MS = 1200;
  const lastEditRef = useRef({
    tag: null,
    at: 0
  });
  const saveHistory = (tag = null) => {
    const now = Date.now();
    if (tag) {
      const last = lastEditRef.current;
      if (last.tag === tag && now - last.at < TYPING_GAP_MS) {
        lastEditRef.current = {
          tag,
          at: now
        };
        return;
      }
      lastEditRef.current = {
        tag,
        at: now
      };
    } else {
      // การกดปุ่มถือเป็นการกระทำเดี่ยว ตัดการรวมของช่องพิมพ์ที่ค้างอยู่
      lastEditRef.current = {
        tag: null,
        at: 0
      };
    }
    setHistory(prev => {
      const next = [...prev, {
        schedule,
        classes,
        classSubjects,
        teachers,
        rooms
      }];
      return next.length > HISTORY_LIMIT ? next.slice(next.length - HISTORY_LIMIT) : next;
    });
  };
  const getFirstName = fullName => {
    if (!fullName) return '-';
    const parts = fullName.trim().split(/\s+/);
    if (parts.length > 1) {
      parts.pop();
      return parts.join(' ');
    }
    return fullName.trim();
  };
  const placedHoursFor = (classId, subjectId) => schedule.filter(s => s.classId === classId && s.subjectId === subjectId).length;

  /**
   * หาว่ามีห้องอื่นใช้ห้องนี้อยู่ในคาบเดียวกันหรือไม่
   *
   * นี่คือข้อจำกัดที่บีบที่สุดของแผนกช่าง เพราะห้องปฏิบัติการมีจำกัด
   * ระบบเดิมเช็คแต่ครูชน ไม่เคยเช็คห้องเลย จึงลงสองห้องเรียนในโรงฝึกเดียวกันได้
   */
  const roomClashAt = (roomId, day, period, exceptClassId, exceptKeys) => {
    if (!roomId) return null;
    return schedule.find(s => {
      if (s.classId === exceptClassId) return false;
      if (s.day !== day || s.period !== period) return false;
      if (exceptKeys && exceptKeys.has(`${s.classId}|${s.day}|${s.period}`)) return false;
      return slotRoomId(s) === roomId;
    });
  };

  // ==========================================
  // ลากย้ายคาบ — ตรรกะ
  // ==========================================

  // สองคาบนี้เป็นวิชาเดียวกันที่วางต่อเนื่องกันหรือไม่
  const sameBlockSlot = (a, b) => {
    if (!a || !b) return false;
    if (a.isFixed || b.isFixed) return !!(a.isFixed && b.isFixed && a.label === b.label);
    if (a.subjectId !== b.subjectId) return false;
    // วิชานอกแผนกไม่มีรหัสผูกไว้ (subjectId เป็น null ทั้งคู่) ต้องเทียบชื่อเพิ่ม
    // ไม่งั้นวิชานอกแผนกคนละวิชาที่วางติดกันจะถูกมองเป็นบล็อกเดียวกัน
    if (!a.subjectId && (a.subjectName || '') !== (b.subjectName || '')) return false;
    if (!!a.isManualTeacher !== !!b.isManualTeacher) return false;
    return a.isManualTeacher ? a.teacherName === b.teacherName : a.teacherId === b.teacherId;
  };

  /**
   * หาบล็อกคาบติดกันที่ครอบคลุมช่องนี้
   * วิชา 3 คาบติดกันถือเป็นก้อนเดียว ลากทีเดียวย้ายทั้งก้อน
   * เพราะตอนวางผู้ใช้ตั้งใจให้ติดกัน การย้ายทีละคาบจะทำให้ก้อนขาด
   *
   * ต้องข้ามคาบพักกลางวันด้วย เพราะวิชา 3 คาบอาจถูกวางเป็นคาบ 4, 6, 7
   * (คร่อมคาบพักที่ 5) ถ้าไม่ข้าม จะถูกมองเป็นสองก้อนแยกกันแล้วย้ายไม่ครบ
   */
  const getBlockAt = (classId, day, period) => {
    const slot = getSlotData(classId, day, period);
    if (!slot) return null;
    const cObj = classes.find(c => c.id === classId) || {};
    const lunch = cObj.lunchPeriod || 5;
    const stepBack = p => {
      const q = p - 1;
      return q === lunch ? q - 1 : q;
    };
    const stepFwd = p => {
      const q = p + 1;
      return q === lunch ? q + 1 : q;
    };
    const periods = [period];
    let a = stepBack(period);
    while (a >= 1 && sameBlockSlot(getSlotData(classId, day, a), slot)) {
      periods.unshift(a);
      a = stepBack(a);
    }
    let b = stepFwd(period);
    while (b <= 11 && sameBlockSlot(getSlotData(classId, day, b), slot)) {
      periods.push(b);
      b = stepFwd(b);
    }
    return {
      classId,
      day,
      periods,
      slot,
      len: periods.length
    };
  };

  /**
   * ตรวจปลายทางแบบ "รายคาบ"
   * ของเดิมบอกแค่ผ่าน/ไม่ผ่านทั้งก้อน ทำให้เห็นแค่ช่องเดียวว่าแดง
   * ไม่รู้ว่าอีก 3 คาบที่เหลือชนหรือว่าง ต้องลองขยับไปเรื่อยๆ
   * แบบใหม่คืนสถานะทุกคาบ จึงระบายสีบอกได้ว่าคาบไหนว่าง คาบไหนชน และชนเพราะอะไร
   */
  const evaluateDrop = (block, day, startPeriod) => {
    const cObj = classes.find(c => c.id === block.classId) || {};
    const lunch = cObj.lunchPeriod || 5;
    const need = block.len;
    if (startPeriod === lunch) {
      return {
        periods: [{
          period: startPeriod,
          ok: false,
          reason: 'คาบพักกลางวัน'
        }],
        allOk: false,
        overflow: false,
        fitCount: 0,
        need
      };
    }

    // คาบของบล็อกที่กำลังลากไม่ถือว่าชนกับตัวเอง
    const moving = new Set(block.periods.map(p => `${block.day}|${p}`));
    const movingKeys = new Set(block.periods.map(p => `${block.classId}|${block.day}|${p}`));
    const out = [];
    let p = startPeriod,
      overflow = false;
    while (out.length < need) {
      if (p > 11) {
        overflow = true;
        break;
      }
      if (p !== lunch) {
        let ok = true,
          reason = '';
        const selfMove = day === block.day && moving.has(`${day}|${p}`);
        const occupied = schedule.find(s => s.classId === block.classId && s.day === day && s.period === p && !selfMove);
        if (occupied) {
          const subj = (classSubjects[block.classId] || []).find(x => x.id === occupied.subjectId);
          ok = false;
          reason = `มี ${occupied.isFixed ? occupied.label : subj?.name || occupied.subjectName || 'วิชาอื่น'} อยู่แล้ว`;
        } else if (!block.slot.isFixed) {
          const busy = schedule.find(s => s.day === day && s.period === p && s.classId !== block.classId && (block.slot.isManualTeacher ? s.isManualTeacher && s.teacherName === block.slot.teacherName : !s.isManualTeacher && s.teacherId === block.slot.teacherId));
          if (busy) {
            const bc = classes.find(c => c.id === busy.classId);
            ok = false;
            reason = `ครูติดสอน ${bc?.name || 'ห้องอื่น'}`;
          } else {
            // ห้องปฏิบัติการชนกัน — ข้อจำกัดที่บีบที่สุดของแผนกช่าง
            const rid = slotRoomId(block.slot);
            const rc = roomClashAt(rid, day, p, block.classId, movingKeys);
            if (rc) {
              const rcCls = classes.find(c => c.id === rc.classId);
              ok = false;
              reason = `ห้อง ${roomLabel(rid)} ถูกใช้โดย ${rcCls?.name || 'ห้องอื่น'}`;
            }
          }
        }
        out.push({
          period: p,
          ok,
          reason
        });
      }
      p++;
    }
    const fitCount = out.filter(x => x.ok).length;
    return {
      periods: out,
      allOk: !overflow && out.length === need && fitCount === need,
      overflow,
      fitCount,
      need
    };
  };
  const commitDrop = (block, day, startPeriod) => {
    const v = evaluateDrop(block, day, startPeriod);
    if (!v.allOk) return false;
    const target = v.periods.map(x => x.period);
    if (day === block.day && target[0] === block.periods[0]) return false; // วางที่เดิม ไม่ต้องทำอะไร

    const movingKeys = new Set(block.periods.map(p => `${block.classId}|${block.day}|${p}`));
    const originals = block.periods.map(p => schedule.find(s => s.classId === block.classId && s.day === block.day && s.period === p));
    const kept = schedule.filter(s => !movingKeys.has(`${s.classId}|${s.day}|${s.period}`));
    const moved = originals.map((orig, i) => ({
      ...orig,
      day,
      period: target[i]
    }));
    const nextSchedule = [...kept, ...moved];
    saveHistory();
    setSchedule(nextSchedule);

    // สรุปผลขึ้นแถบแจ้งมุมล่าง พร้อมสถานะว่าวิชานี้ยังขาดอีกกี่คาบ
    const subj = block.slot.isFixed ? null : (classSubjects[block.classId] || []).find(x => x.id === block.slot.subjectId);
    const subjName = subj?.name || block.slot.subjectName;
    const cls = classes.find(c => c.id === block.classId);
    const where = target.length > 1 ? `${day} คาบ ${target[0]}-${target[target.length - 1]}` : `${day} คาบ ${target[0]}`;
    let stat = null;
    if (subj) {
      const required = Number(subj.theory || 0) + Number(subj.practical || 0);
      // นับจากตารางชุดใหม่ ไม่ใช่ชุดเดิมที่ยังไม่อัปเดต
      const placed = nextSchedule.filter(s => s.classId === block.classId && s.subjectId === subj.id).length;
      const remain = Math.max(0, required - placed);
      stat = {
        placed,
        required,
        remain
      };
    }
    showToast({
      verb: 'ย้าย',
      name: block.slot.isFixed ? block.slot.label : subjName || 'คาบเรียน',
      where,
      className: cls?.name || '',
      len: target.length,
      stat,
      // จำความยาวประวัติไว้ ถ้ามีการแก้ไขอื่นแทรกเข้ามา ต้องซ่อนแถบนี้ทิ้ง
      // ไม่งั้นปุ่มย้อนกลับจะไปย้อนการแก้ไขอันใหม่แทนการย้ายครั้งนี้
      historyLen: history.length + 1
    });
    return true;
  };

  // ==========================================
  // ลากย้ายคาบ — การควบคุมด้วยเมาส์และนิ้ว
  //
  // หลักการสำคัญ: ระหว่างลาก "ห้ามให้ React วาดใหม่แม้แต่ครั้งเดียว"
  // ของเดิมสั่ง setState ทุกครั้งที่เมาส์ข้ามช่อง ทำให้ต้องคำนวณตาราง 55 ช่อง
  // และตารางสรุปด้านขวาใหม่ทั้งหมด จึงหน่วงจนวางผิดช่อง
  // แบบใหม่แตะ DOM ตรงๆ ทั้งเงา ทั้งสีช่องปลายทาง ทั้งข้อความบอกเหตุผล
  // แล้วรวมงานทั้งหมดไว้ในจังหวะวาดภาพเดียว (requestAnimationFrame)
  // ==========================================
  const gestureRef = useRef(null);
  const gridRef = useRef(null);
  const suppressClickRef = useRef(false);
  const litCellsRef = useRef([]); // ช่องที่กำลังระบายสีอยู่
  const liftedCardsRef = useRef([]); // การ์ดต้นทางที่กำลังยก

  // เงาที่ลอยตามเมาส์ ติดตั้งไว้ตลอดเวลาแล้วซ่อนไว้
  // เพื่อไม่ต้องให้ React สร้างใหม่ตอนเริ่มลาก ซึ่งจะสะดุดพอดีจังหวะที่ผู้ใช้เริ่มขยับ
  const ghostRef = useRef(null);
  const ghostNameRef = useRef(null);
  const ghostSubRef = useRef(null);
  const ghostWhyRef = useRef(null);
  const setGhostPos = (x, y) => {
    const g = ghostRef.current,
      gs = gestureRef.current;
    if (!g || !gs) return;
    g.style.transform = `translate3d(${x - gs.offX}px, ${y - gs.offY}px, 0)`;
  };
  const clearCellPaint = () => {
    litCellsRef.current.forEach(el => el.classList.remove('drop-ok', 'drop-bad'));
    litCellsRef.current = [];
  };

  // ระบายสีช่องปลายทางทีละคาบ เขียว/ส้ม = ว่าง แดง = ชน
  const paintCells = (day, result) => {
    clearCellPaint();
    if (!day || !result) return;
    result.periods.forEach(({
      period,
      ok
    }) => {
      const el = document.querySelector(`[data-drop-cell][data-day="${day}"][data-period="${period}"]`);
      if (!el) return;
      el.classList.add(ok ? 'drop-ok' : 'drop-bad');
      litCellsRef.current.push(el);
    });
  };
  const setGhostText = result => {
    const gs = gestureRef.current;
    if (!gs) return;
    const why = ghostWhyRef.current;
    const g = ghostRef.current;
    if (!why || !g) return;
    if (!result) {
      why.textContent = 'ลากออกนอกตาราง · ปล่อยเพื่อยกเลิก';
      why.className = 'ghost-why ghost-why-idle';
      g.style.boxShadow = '0 14px 32px rgba(15,30,61,.3)';
      return;
    }
    if (result.allOk) {
      const ps = result.periods.map(x => x.period);
      why.textContent = ps.length > 1 ? `วางได้ · คาบ ${ps[0]}-${ps[ps.length - 1]}` : `วางได้ · คาบ ${ps[0]}`;
      why.className = 'ghost-why ghost-why-ok';
      g.style.boxShadow = '0 14px 32px rgba(217,116,26,.35), 0 0 0 2px var(--accent)';
      return;
    }
    const firstBad = result.periods.find(x => !x.ok);
    const over = result.overflow ? ' · เลยคาบ 11' : '';
    why.textContent = `วางได้ ${result.fitCount}/${result.need} คาบ${over}` + (firstBad ? ` · คาบ ${firstBad.period} ${firstBad.reason}` : '');
    why.className = 'ghost-why ghost-why-bad';
    g.style.boxShadow = '0 14px 32px rgba(184,31,45,.35), 0 0 0 2px var(--danger)';
  };
  const hitTest = (x, y) => {
    const el = document.elementFromPoint(x, y);
    const cell = el && el.closest ? el.closest('[data-drop-cell]') : null;
    if (!cell) return null;
    const day = cell.getAttribute('data-day');
    const period = Number(cell.getAttribute('data-period'));
    if (!day || !period) return null;
    return {
      day,
      period
    };
  };

  /**
   * งานทั้งหมดของการลากรวมอยู่ในจังหวะวาดภาพเดียว
   * เมาส์อาจส่ง event มาถี่กว่าจอรีเฟรช ถ้าทำงานทุก event จะเสียแรงเปล่า
   * เก็บพิกัดล่าสุดไว้แล้วประมวลผลรอบละครั้งพอดีกับจังหวะจอ
   */
  const dragTick = () => {
    const gs = gestureRef.current;
    if (!gs || !gs.started) return;

    // เลื่อนตารางอัตโนมัติเมื่อลากไปชิดขอบ
    const wrap = gridRef.current;
    if (wrap) {
      const r = wrap.getBoundingClientRect();
      const EDGE = 72,
        SPEED = 20;
      if (gs.x < r.left + EDGE) wrap.scrollLeft -= SPEED * Math.min(1, (r.left + EDGE - gs.x) / EDGE);else if (gs.x > r.right - EDGE) wrap.scrollLeft += SPEED * Math.min(1, (gs.x - (r.right - EDGE)) / EDGE);
    }
    setGhostPos(gs.x, gs.y);
    const hit = hitTest(gs.x, gs.y);
    const key = hit ? `${hit.day}|${hit.period}` : '';
    // ระบายสีใหม่เฉพาะตอนเปลี่ยนช่อง หรือหลังเลื่อนตารางซึ่งทำให้ตำแหน่งช่องขยับ
    if (key !== gs.lastKey || gs.needRepaint) {
      gs.lastKey = key;
      gs.needRepaint = false;
      if (!hit) {
        gs.result = null;
        gs.hit = null;
        clearCellPaint();
        setGhostText(null);
      } else {
        gs.hit = hit;
        gs.result = evaluateDrop(gs.block, hit.day, hit.period);
        paintCells(hit.day, gs.result);
        setGhostText(gs.result);
      }
    }
    gs.raf = requestAnimationFrame(dragTick);
  };
  const startDrag = () => {
    const gs = gestureRef.current;
    if (!gs || gs.started) return;
    gs.started = true;
    suppressClickRef.current = true;
    document.body.classList.add('tt-dragging');
    const {
      block
    } = gs;
    const subjInfoForGhost = slotSubjectInfo(block.slot);
    const cls = classes.find(c => c.id === block.classId);
    const pal = block.slot.isFixed ? null : subjInfoForGhost ? subjInfoForGhost.pal : SUBJECT_COLORS[0];

    // ตั้งค่าเงาด้วย DOM ตรงๆ ไม่ผ่าน React
    const g = ghostRef.current;
    if (g) {
      g.style.display = 'flex';
      g.style.width = `${Math.min(gs.rect.width, 210)}px`;
      g.style.background = pal ? pal.bg : '#EEF0F4';
      g.style.borderLeftColor = pal ? pal.line : '#48597D';
      g.style.color = pal ? pal.text : '#0F1E3D';
      if (ghostNameRef.current) ghostNameRef.current.textContent = block.slot.isFixed ? block.slot.label : subjInfoForGhost?.name || 'วิชา';
      if (ghostSubRef.current) ghostSubRef.current.textContent = `${cls?.name || ''}${block.len > 1 ? ` · ${block.len} คาบ` : ' · 1 คาบ'}`;
    }
    setGhostPos(gs.x, gs.y);

    // ทำให้การ์ดต้นทางจางลง เพื่อให้เห็นว่าเดิมอยู่ตรงไหน
    liftedCardsRef.current = [];
    block.periods.forEach(p => {
      const el = document.querySelector(`[data-cardkey="${block.classId}|${block.day}|${p}"]`);
      if (el) {
        el.classList.add('card-lifted');
        liftedCardsRef.current.push(el);
      }
    });
    gs.raf = requestAnimationFrame(dragTick);
  };
  const endDrag = commit => {
    const gs = gestureRef.current;
    const h = gs && gs.handlers;
    window.removeEventListener('pointermove', h ? h.move : onPointerMove);
    window.removeEventListener('pointerup', h ? h.up : onPointerUp);
    window.removeEventListener('pointercancel', h ? h.cancel : onPointerCancel);
    if (!gs) return;
    if (gs.holdTimer) clearTimeout(gs.holdTimer);
    if (gs.raf) cancelAnimationFrame(gs.raf);
    if (gs.started) {
      document.body.classList.remove('tt-dragging');
      clearCellPaint();
      liftedCardsRef.current.forEach(el => el.classList.remove('card-lifted'));
      liftedCardsRef.current = [];
      if (ghostRef.current) ghostRef.current.style.display = 'none';
      if (commit && gs.hit && gs.result && gs.result.allOk) {
        commitDrop(gs.block, gs.hit.day, gs.hit.period);
      }
      setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
    }
    gestureRef.current = null;
  };
  const onPointerMove = e => {
    const gs = gestureRef.current;
    if (!gs) return;
    gs.x = e.clientX;
    gs.y = e.clientY;
    if (!gs.started) {
      const dist = Math.hypot(e.clientX - gs.startX, e.clientY - gs.startY);
      if (gs.isTouch) {
        // บนจอสัมผัส ถ้าขยับก่อนกดค้างครบ ถือว่าตั้งใจปัดเลื่อนตาราง ไม่ใช่ลากคาบ
        if (dist > 10) endDrag(false);
        return;
      }
      if (dist < 4) return; // กันมือสั่นตอนคลิกธรรมดา
      startDrag();
      return;
    }
    // ไม่ทำอะไรต่อที่นี่ ปล่อยให้ dragTick จัดการในจังหวะวาดภาพ
    if (e.cancelable) e.preventDefault();
  };
  const onPointerUp = () => endDrag(true);
  const onPointerCancel = () => endDrag(false);
  const onCardPointerDown = (e, classId, day, period) => {
    if (e.button !== undefined && e.button !== 0) return; // เฉพาะปุ่มซ้าย
    const block = getBlockAt(classId, day, period);
    if (!block) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const isTouch = e.pointerType === 'touch';
    gestureRef.current = {
      block,
      rect,
      isTouch,
      started: false,
      startX: e.clientX,
      startY: e.clientY,
      x: e.clientX,
      y: e.clientY,
      offX: Math.min(e.clientX - rect.left, 180),
      offY: Math.min(e.clientY - rect.top, 34),
      hit: null,
      result: null,
      lastKey: '',
      needRepaint: true,
      holdTimer: null,
      raf: null
    };

    // เก็บฟังก์ชันชุดที่ลงทะเบียนจริงไว้ด้วย
    // เพราะฟังก์ชันถูกสร้างใหม่ทุกครั้งที่วาดหน้าจอ ถ้าถอดด้วยตัวอื่นจะถอดไม่ออก
    gestureRef.current.handlers = {
      move: onPointerMove,
      up: onPointerUp,
      cancel: onPointerCancel
    };
    window.addEventListener('pointermove', onPointerMove, {
      passive: false
    });
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerCancel);

    // บนจอสัมผัสต้องกดค้างก่อนจึงเริ่มลาก เพื่อให้ปัดนิ้วเลื่อนตารางได้ตามปกติ
    if (isTouch) gestureRef.current.holdTimer = setTimeout(() => startDrag(), 220);
  };

  // เก็บกวาดให้เรียบร้อยหากผู้ใช้ปิดหน้าไปกลางคัน
  useEffect(() => () => {
    // ต้องถอดด้วยฟังก์ชันชุดเดียวกับที่ลงทะเบียนไว้ ไม่ใช่ชุดจากการวาดรอบแรก
    const h = gestureRef.current && gestureRef.current.handlers;
    if (h) {
      window.removeEventListener('pointermove', h.move);
      window.removeEventListener('pointerup', h.up);
      window.removeEventListener('pointercancel', h.cancel);
    }
    if (gestureRef.current && gestureRef.current.raf) cancelAnimationFrame(gestureRef.current.raf);
    if (gestureRef.current && gestureRef.current.holdTimer) clearTimeout(gestureRef.current.holdTimer);
    document.body.classList.remove('tt-dragging');
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    if (historyPersistRef.current) clearTimeout(historyPersistRef.current);
  }, []);

  /**
   * ซ่อนแถบแจ้งทิ้งทันทีที่ประวัติเปลี่ยนไปจากตอนที่แจ้ง
   *
   * เหตุผล: ปุ่มย้อนกลับบนแถบใช้ระบบย้อนกลับตัวเดียวกับปุ่มบนแถบบน
   * ซึ่งย้อนได้แค่การแก้ไขล่าสุด ถ้าผู้ใช้ไปทำอะไรอย่างอื่นต่อ
   * แล้วย้อนกลับมากดปุ่มบนแถบนี้ จะกลายเป็นย้อนการแก้ไขอันใหม่ผิดตัว
   */
  useEffect(() => {
    if (toast && toast.historyLen !== history.length) dismissToast();
  }, [history.length, toast]);

  // ==========================================
  // 5. Tabs (แผ่นงานแบบสมุดบัญชี)
  // ==========================================
  const renderTabs = (items, currentTabId, setCurrentTabId, setItems, accentVar, onDouble) => {
    return items.map(item => /*#__PURE__*/React.createElement("div", {
      key: item.id,
      draggable: editingTabId !== item.id,
      onDragStart: e => {
        setDraggedTabId(item.id);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', item.id);
      },
      onDragOver: e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      },
      onDrop: e => {
        e.preventDefault();
        if (draggedTabId && draggedTabId !== item.id) {
          const dIdx = items.findIndex(i => i.id === draggedTabId);
          const tIdx = items.findIndex(i => i.id === item.id);
          if (dIdx !== -1 && tIdx !== -1) {
            const arr = [...items];
            const [moved] = arr.splice(dIdx, 1);
            arr.splice(tIdx, 0, moved);
            saveHistory();
            setItems(arr);
          }
        }
        setDraggedTabId(null);
      },
      onDragEnd: () => setDraggedTabId(null),
      onClick: () => {
        if (editingTabId !== item.id) setCurrentTabId(item.id);
      },
      onDoubleClick: () => onDouble ? onDouble(item) : handleTabDoubleClick(item),
      title: onDouble ? 'คลิกเพื่อสลับ · ดับเบิลคลิกเพื่อเปิดหน้าตั้งค่า · ลากเพื่อเรียงใหม่' : 'คลิกเพื่อสลับ · ดับเบิลคลิกเพื่อเปลี่ยนชื่อ · ลากเพื่อเรียงใหม่',
      className: `sheet-tab ${currentTabId === item.id ? 'sheet-tab-on' : ''} ${draggedTabId === item.id ? 'sheet-tab-drag' : ''}`,
      style: (() => {
        const pal = classTabColor(item);
        if (pal) {
          // แท็บห้องเรียน: สีตามระดับชั้น/ปี — พื้นอ่อนตอนไม่ได้เลือก ขาวตอนเลือก แต่เส้นขอบบน+ตัวหนังสือคงสีเดิมเสมอ
          return {
            borderTopColor: pal.accent,
            background: currentTabId === item.id ? undefined : pal.bg,
            color: pal.accent,
            boxShadow: currentTabId === item.id ? `inset 0 3px 0 ${pal.accent}` : undefined
          };
        }
        return currentTabId === item.id ? {
          boxShadow: `inset 0 3px 0 ${accentVar}`
        } : undefined;
      })()
    }, editingTabId === item.id ? /*#__PURE__*/React.createElement("input", {
      autoFocus: true,
      value: editTabName,
      onChange: e => setEditTabName(e.target.value),
      onBlur: () => saveTabName(item.id),
      onKeyDown: e => e.key === 'Enter' && saveTabName(item.id),
      className: "tab-input"
    }) : /*#__PURE__*/React.createElement("span", null, item.name)));
  };

  // ==========================================
  // 6. ตารางสรุปในไฟล์ PDF
  // ==========================================
  const renderPDFSummaryTable = (summaryData, isStudentMode) => {
    // พื้นที่คอลัมน์ขวาจำกัด ถ้ารายวิชาเยอะต้องย่อขนาดลง
    // ไม่งั้นแถวท้ายๆ จะถูก overflow:hidden ตัดหายไปโดยผู้ใช้ไม่รู้ตัว
    const n = summaryData.summary.length;
    const d = n > 20 ? {
      pad: '1px 3px',
      fs: 10,
      fsNum: 10.5,
      clamp: 1
    } : n > 14 ? {
      pad: '2px 3px',
      fs: 11.5,
      fsNum: 12,
      clamp: 1
    } : {
      pad: '4px',
      fs: 13,
      fsNum: 13.5,
      clamp: 2
    };
    const mono = PRINT_FONT;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '8px'
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'center',
        tableLayout: 'fixed'
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        padding: '6px 4px',
        fontSize: '13.5px',
        width: '22%'
      }
    }, "รหัสวิชา"), /*#__PURE__*/React.createElement("th", {
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        padding: '6px 4px',
        fontSize: '13.5px',
        width: '44%'
      }
    }, "รายวิชา"), /*#__PURE__*/React.createElement("th", {
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        padding: '6px 4px',
        fontSize: '13.5px',
        width: '8.5%'
      }
    }, "ท."), /*#__PURE__*/React.createElement("th", {
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        padding: '6px 4px',
        fontSize: '13.5px',
        width: '8.5%'
      }
    }, "ป."), /*#__PURE__*/React.createElement("th", {
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        padding: '6px 4px',
        fontSize: '13.5px',
        width: '8.5%'
      }
    }, "น."), /*#__PURE__*/React.createElement("th", {
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        padding: '6px 4px',
        fontSize: '13.5px',
        width: '8.5%'
      }
    }, "ชม."))), /*#__PURE__*/React.createElement("tbody", null, n === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "6",
      style: {
        border: '1px solid #111',
        padding: '16px',
        fontSize: '14.5px',
        color: '#6b7280',
        fontStyle: 'italic'
      }
    }, isStudentMode ? 'ไม่มีข้อมูล' : 'ไม่มีข้อมูลสอน')) : summaryData.summary.map((s, idx) => {
      // สีพาสเทลจางเกินไปจนมองไม่ออกว่าคือสีอะไร ทั้งในหน้าตัวอย่างและตอนพิมพ์จริง
      // เข้มขึ้นให้เห็นชัด และใส่สีตัวหนังสือกำกับที่ตัวเลขด้วย
      // เพราะเบราว์เซอร์มักตัดสีพื้นหลังออกตอนพิมพ์ (ปิด "Background graphics" เป็นค่าเริ่มต้น)
      // แต่สีตัวหนังสือพิมพ์ออกมาได้เสมอไม่ว่าตั้งค่าอย่างไร จึงเป็นตัวช่วยสำรองที่เชื่อถือได้กว่า
      let bgColor = 'white';
      let textColor = '#111';
      let hoursDisplay = s.hours;
      if (isStudentMode) {
        const reqHrs = Number(s.theory) + Number(s.practical);
        const schHrs = placedHoursFor(summaryData.classId, s.id);
        hoursDisplay = `${schHrs}/${reqHrs}`;
        bgColor = '#F8D0D3';
        textColor = '#8C1620';
        if (schHrs >= reqHrs) {
          bgColor = '#C9EAD9';
          textColor = '#0E5A42';
        } else if (schHrs > 0) {
          bgColor = '#FBE7AE';
          textColor = '#7A4E06';
        }
      }
      return /*#__PURE__*/React.createElement("tr", {
        key: s.id || idx,
        style: {
          backgroundColor: bgColor,
          WebkitPrintColorAdjust: 'exact',
          printColorAdjust: 'exact'
        }
      }, /*#__PURE__*/React.createElement("td", {
        style: {
          border: '1px solid #111',
          padding: d.pad,
          fontSize: `${d.fs}px`,
          fontFamily: mono
        }
      }, s.code || '-'), /*#__PURE__*/React.createElement("td", {
        style: {
          border: '1px solid #111',
          padding: d.pad,
          fontSize: `${d.fs}px`,
          textAlign: 'left',
          fontWeight: 'bold'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: '-webkit-box',
          WebkitLineClamp: d.clamp,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }
      }, s.name)), /*#__PURE__*/React.createElement("td", {
        style: {
          border: '1px solid #111',
          padding: d.pad,
          fontSize: `${d.fsNum}px`,
          fontFamily: mono
        }
      }, s.theory), /*#__PURE__*/React.createElement("td", {
        style: {
          border: '1px solid #111',
          padding: d.pad,
          fontSize: `${d.fsNum}px`,
          fontFamily: mono
        }
      }, s.practical), /*#__PURE__*/React.createElement("td", {
        style: {
          border: '1px solid #111',
          padding: d.pad,
          fontSize: `${d.fsNum}px`,
          fontFamily: mono
        }
      }, s.credit), /*#__PURE__*/React.createElement("td", {
        style: {
          border: '1px solid #111',
          padding: d.pad,
          fontSize: `${d.fsNum}px`,
          fontWeight: 'bold',
          fontFamily: mono,
          color: textColor
        }
      }, hoursDisplay));
    })), n > 0 && /*#__PURE__*/React.createElement("tfoot", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "2",
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        padding: '5px',
        fontSize: '13px',
        fontWeight: 'bold',
        textAlign: 'right'
      }
    }, "รวมทั้งสิ้น"), /*#__PURE__*/React.createElement("td", {
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        padding: '5px',
        fontSize: '13px',
        fontWeight: 'bold',
        fontFamily: mono
      }
    }, summaryData.sumTheory), /*#__PURE__*/React.createElement("td", {
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        padding: '5px',
        fontSize: '13px',
        fontWeight: 'bold',
        fontFamily: mono
      }
    }, summaryData.sumPractical), /*#__PURE__*/React.createElement("td", {
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        padding: '5px',
        fontSize: '13px',
        fontWeight: 'bold',
        fontFamily: mono
      }
    }, summaryData.sumCredit), /*#__PURE__*/React.createElement("td", {
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        padding: '5px',
        fontSize: '13px',
        fontWeight: 'bold',
        fontFamily: mono
      }
    }, summaryData.sumHours)))));
  };

  // ==========================================
  // 7. Action Handlers
  // ==========================================
  const executeConfirm = () => {
    const {
      action,
      payload
    } = confirmDialog;
    setConfirmDialog(prev => ({
      ...prev,
      isOpen: false
    }));
    if (action === 'DELETE_CLASS') {
      saveHistory();
      const remaining = classes.filter(c => c.id !== payload);
      setClasses(remaining);
      if (currentClass === payload) setCurrentClass(remaining[0]?.id || '');
      setSchedule(prev => prev.filter(s => s.classId !== payload));
    } else if (action === 'CLEAR_CURRENT_CLASS') {
      saveHistory();
      setSchedule(prev => prev.filter(s => s.classId !== currentClass || s.isFixed));
    } else if (action === 'CLEAR_ALL_DATA') {
      saveHistory();
      (async () => {
        try {
          await window.storage.delete(DATA_KEY, false);
        } catch (e) {}
        try {
          await window.storage.delete(UI_KEY, false);
        } catch (e) {}
        try {
          await window.storage.delete(HISTORY_KEY, false);
        } catch (e) {}
      })();
      setClasses(INITIAL_CLASSES);
      setClassSubjects({
        'c1': INITIAL_SUBJECTS,
        'c2': []
      });
      setConfig(INITIAL_CONFIG);
      setSchedule([]);
      setTeachers(INITIAL_TEACHERS_DATA);
      setRooms(INITIAL_ROOMS);
      setLastSavedTime(null);
      setHasSavedData(false);
      setIsDataModalOpen(false);
      setStep('home');
    } else if (action === 'RESET_FROM_HOME') {
      (async () => {
        try {
          await window.storage.delete(DATA_KEY, false);
        } catch (e) {}
        try {
          await window.storage.delete(UI_KEY, false);
        } catch (e) {}
        try {
          await window.storage.delete(HISTORY_KEY, false);
        } catch (e) {}
      })();
      setClasses(INITIAL_CLASSES);
      setClassSubjects({
        'c1': INITIAL_SUBJECTS,
        'c2': []
      });
      setConfig(INITIAL_CONFIG);
      setTeachers(INITIAL_TEACHERS_DATA);
      setRooms(INITIAL_ROOMS);
      const init = [];
      INITIAL_CLASSES.forEach(c => {
        init.push({
          classId: c.id,
          day: 'พุธ',
          period: 1,
          isFixed: true,
          label: 'กิจกรรม'
        });
        init.push({
          classId: c.id,
          day: 'พุธ',
          period: 2,
          isFixed: true,
          label: 'กิจกรรม'
        });
      });
      setSchedule(init);
      setHistory([]);
      setLastSavedTime(null);
      setHasSavedData(false);
      setCurrentClass(INITIAL_CLASSES[0].id);
      setStep('timetable');
    } else if (action === 'DELETE_ROOM') {
      saveHistory();
      setRooms(rooms.filter(r => r.id !== payload));
      // คาบและครูที่อ้างห้องนี้ ให้กลายเป็นไม่ระบุห้อง ไม่ให้เหลือรหัสห้องที่ชี้ไปที่ว่าง
      setSchedule(prev => prev.map(s => s.roomId === payload ? {
        ...s,
        roomId: null
      } : s));
      setTeachers(prev => prev.map(t => t.roomId === payload ? {
        ...t,
        roomId: null
      } : t));
    } else if (action === 'DELETE_TEACHER') {
      saveHistory();
      setTeachers(teachers.filter(t => t.id !== payload));
    } else if (action === 'OPEN_SUBJECT_MODAL') {
      setIsSubjectModalOpen(true);
    }
  };
  const handleStart = () => {
    if (!config.year) {
      customAlert('เลือกปีการศึกษาก่อนเริ่มจัดตาราง');
      return;
    }
    if (schedule.length === 0) {
      const init = [];
      classes.forEach(c => {
        init.push({
          classId: c.id,
          day: 'พุธ',
          period: 1,
          isFixed: true,
          label: 'กิจกรรม'
        });
        init.push({
          classId: c.id,
          day: 'พุธ',
          period: 2,
          isFixed: true,
          label: 'กิจกรรม'
        });
      });
      setSchedule(init);
    }
    setCurrentClass(deptClasses[0]?.id || '');
    setStep('timetable');
  };
  const handleUndo = () => {
    if (history.length === 0) return;
    // ตัดการรวมการพิมพ์ที่ค้างอยู่ ไม่งั้นการพิมพ์ครั้งถัดไปจะไปรวมกับขั้นที่เพิ่งย้อนกลับไปแล้ว
    lastEditRef.current = {
      tag: null,
      at: 0
    };
    const last = history[history.length - 1];
    setSchedule(last.schedule);
    setClasses(last.classes);
    setClassSubjects(last.classSubjects);
    setTeachers(last.teachers);
    if (last.rooms) setRooms(last.rooms);
    setHistory(prev => prev.slice(0, -1));
  };
  const handleClearCurrentClass = () => {
    const name = classes.find(c => c.id === currentClass)?.name || '';
    requestConfirm('CLEAR_CURRENT_CLASS', null, 'ล้างตารางห้องนี้', `คาบเรียนทั้งหมดของห้อง "${name}" จะถูกลบออกจากตาราง รายวิชาและข้อมูลห้องยังอยู่ครบ`, 'ล้างตาราง');
  };
  const handleClearAllData = () => {
    requestConfirm('CLEAR_ALL_DATA', null, 'ล้างข้อมูลทั้งหมด', 'ห้องเรียน รายวิชา ครูผู้สอน และตารางทั้งหมดจะถูกลบและกลับไปเป็นค่าเริ่มต้น สำรองข้อมูลเป็นไฟล์ไว้ก่อนหากยังต้องการใช้', 'ล้างทั้งหมด');
  };
  const exportBackup = () => {
    const data = {
      classes,
      classSubjects,
      config,
      schedule,
      teachers,
      rooms,
      version: '2.1'
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", `ตารางเรียน_สำรอง_${config.year}_ภาค${config.term}.json`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const importBackup = (e, openAfter = false) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const parsed = JSON.parse(ev.target.result);
        if (parsed.classes && parsed.config) {
          const migrated = parsed.classes.map(c => ({
            ...c,
            lunchPeriod: c.lunchPeriod || 5,
            level: c.level || 'ปวช.',
            year: c.year || 1,
            room: c.room || 1
          }));
          const migSubs = {};
          Object.entries(parsed.classSubjects || {}).forEach(([cid, list]) => {
            migSubs[cid] = (list || []).map((s, i) => ({
              ...s,
              colorKey: s.colorKey || normalizeSubjectColor(s, i).key
            }));
          });
          const importedYear = parsed.config.year || '';
          const mig = migrateRooms(parsed);
          saveHistory();
          setClasses(migrated);
          setClassSubjects(migSubs);
          setTeachers(mig.teachers);
          setRooms(mig.rooms);
          setConfig({
            term: parsed.config.term || 1,
            year: importedYear
          });
          setSchedule(mig.schedule);
          setHasSavedData(true);
          // ห้องที่เลือกไว้เดิมอาจไม่มีอยู่ในไฟล์ที่นำเข้า ต้องชี้ไปห้องแรกของไฟล์ใหม่
          setCurrentClass(migrated[0]?.id || '');
          setCurrentTeacherTab((parsed.teachers || [])[0]?.id || '');
          const count = `${migrated.length} ห้อง · ${(parsed.teachers || []).length} ครู · ${(parsed.schedule || []).filter(s => s.subjectId).length} คาบ`;
          if (openAfter && importedYear !== '') {
            setStep('timetable');
          } else if (openAfter) {
            customAlert(`นำเข้าข้อมูลแล้ว (${count})\n\nไฟล์นี้ไม่ได้ระบุปีการศึกษา เลือกปีการศึกษาก่อนเริ่มจัดตาราง`);
          } else {
            customAlert(`กู้คืนข้อมูลเรียบร้อยแล้ว (${count})`);
          }
        } else {
          customAlert('ไฟล์นี้ไม่ใช่ไฟล์สำรองของระบบ เลือกไฟล์ .json ที่ได้จากปุ่มสำรองข้อมูล');
        }
      } catch (err) {
        customAlert('อ่านไฟล์ไม่สำเร็จ ไฟล์อาจเสียหายหรือไม่ใช่รูปแบบ JSON');
      }
      e.target.value = null;
    };
    reader.readAsText(file);
  };
  const handleExportPDF = mode => {
    // กันกรณีสั่งพิมพ์ตารางสอนขณะที่ยังไม่มีครูในระบบ ซึ่งจะได้ไฟล์เปล่า
    if (mode === 'teacher_current' && !activeTeacherObj.id) {
      customAlert('ยังไม่ได้เลือกครูผู้สอน เพิ่มรายชื่อครูแล้วเลือกแท็บครูที่ต้องการก่อนสั่งพิมพ์');
      return;
    }
    if (mode === 'room_current' && !activeRoomObj.id) {
      customAlert('ยังไม่ได้เลือกห้อง เพิ่มห้องในทะเบียนแล้วเลือกแท็บห้องที่ต้องการก่อนสั่งพิมพ์');
      return;
    }
    if (mode === 'room_all' && deptRooms.length === 0) {
      customAlert(rooms.length > 0 ? 'ห้องทั้งหมดในทะเบียนตอนนี้เป็นห้องนอกแผนก ซึ่งไม่รวมในตารางนี้ เพิ่มห้องของแผนกก่อนสั่งพิมพ์' : 'ยังไม่มีห้องในทะเบียน เพิ่มห้องก่อนสั่งพิมพ์ตารางการใช้ห้อง');
      return;
    }
    if (mode === 'teacher_all' && teachers.length === 0) {
      customAlert('ยังไม่มีครูผู้สอนในระบบ เพิ่มรายชื่อครูก่อนสั่งพิมพ์ตารางสอน');
      return;
    }
    setPdfError('');
    setIsDataModalOpen(false);
    setPrintMode(mode);
  };
  const pdfTitle = () => {
    if (printMode === 'current') return `ตารางเรียน ${activeClassObj.name || ''}`;
    if (printMode === 'teacher_current') return `ตารางสอน ${activeTeacherObj?.name || 'ครูผู้สอน'}`;
    if (printMode === 'teacher_all') return 'ตารางสอน ครูทุกคน';
    if (printMode === 'room_current') return `ตารางการใช้ห้อง ${activeRoomObj?.name || ''}`;
    if (printMode === 'room_all') return 'ตารางการใช้ห้อง ทุกห้อง';
    return 'ตารางเรียน ทุกห้อง';
  };
  const pdfFilename = ext => `${safeFilename(pdfTitle())} ${config.year}-${config.term}.${ext}`;

  /**
   * ประกอบเอกสาร HTML ที่พิมพ์ได้ในตัวเอง จากเนื้อหาในหน้าตัวอย่างที่เห็นอยู่
   * ใช้ร่วมกันทั้งสองปุ่ม เพื่อให้ผลลัพธ์ตรงกันเสมอ ไม่ต้องดูแลสองชุด
   */
  const buildPrintableHtml = () => {
    const src = document.getElementById('pdf-render-area');
    if (!src) throw new Error('NODOM');
    const pages = src.querySelectorAll('.pdf-page');
    if (pages.length === 0) throw new Error('NOPAGE');
    const title = pdfTitle();
    return `<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)} ${config.year}-${config.term}</title>
<style>
  html,body{ margin:0; padding:0; background:#e9ecf1; }
  html{ -webkit-print-color-adjust:exact; print-color-adjust:exact; color-adjust:exact; }
  body,body *{ font-family:${PRINT_FONT}; box-sizing:border-box; -webkit-print-color-adjust:exact; print-color-adjust:exact; color-adjust:exact; }
  .sheet{ display:flex; flex-direction:column; align-items:center; gap:20px; padding:20px 0; }
  .pdf-page{ background:#fff; box-shadow:0 6px 20px rgba(15,30,61,.18); }
  .bar{
    position:sticky; top:0; z-index:9; background:#0F1E3D; color:#fff;
    padding:12px 18px; font-size:15px; line-height:1.5;
  }
  .bar b{ color:#F0A85C; }
  .bar kbd{
    background:#fff; color:#0F1E3D; border-radius:4px; padding:1px 7px;
    font-size:13px; font-weight:700;
  }
${PRINT_PAGE_CSS}
  @media print{
    html,body{ background:#fff; -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important; }
    * { -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important; }
    .bar{ display:none !important; }
    .sheet{ display:block; gap:0; padding:0; }
  }
</style>
</head>
<body>
<div class="bar">
  กด <kbd>Ctrl</kbd> + <kbd>P</kbd> (เครื่อง Mac ใช้ <kbd>&#8984;</kbd> + <kbd>P</kbd>) แล้วเลือกปลายทางเป็น <b>บันทึกเป็น PDF</b>
  &nbsp;·&nbsp; ตั้งกระดาษ <b>A4 แนวนอน</b> และขอบกระดาษเป็น <b>ไม่มี</b> &nbsp;·&nbsp; แถบนี้จะไม่ติดไปในไฟล์
</div>
<div class="sheet">
${src.innerHTML}
</div>
<script>
window.addEventListener('load', function(){ setTimeout(function(){ try{ window.print(); }catch(e){} }, 500); });
<\/script>
</body>
</html>`;
  };

  /**
   * สั่งพิมพ์ — เปิดเอกสารในแท็บใหม่แล้วเด้งหน้าต่างพิมพ์ให้อัตโนมัติ
   *
   * ของเดิมเรียก window.print() ตรงๆ บนหน้านี้ ซึ่งพังเงียบๆ ไม่มี error ใดๆ
   * เพราะหน้าตัวอย่างรันอยู่ในกรอบ iframe ที่ถูกจำกัดสิทธิ์เพื่อความปลอดภัย
   * (ทั้งตอนดูในแชทและตอนเปิดจากลิงก์สาธารณะที่แชร์ออกไป)
   * เบราว์เซอร์บล็อกคำสั่งพิมพ์จากกรอบนั้นโดยไม่แจ้งอะไรเลย ปุ่มจึงดูเหมือนกดไม่ติด
   *
   * แก้โดยเปิดเนื้อหาเป็นแท็บใหม่แทน ซึ่งเป็นหน้าเว็บปกติไม่ถูกจำกัดสิทธิ์แบบเดียวกัน
   * ถ้าเบราว์เซอร์บล็อกการเปิดแท็บใหม่ (popup blocker) จะสลับไปดาวน์โหลดไฟล์แทนให้อัตโนมัติ
   * ซึ่งเป็นวิธีที่ไม่มีทางถูกบล็อกได้เลย
   */
  const printNow = () => {
    setPdfError('');
    try {
      const html = buildPrintableHtml();
      const blob = new Blob(['\uFEFF' + html], {
        type: 'text/html;charset=utf-8'
      });
      const url = URL.createObjectURL(blob);
      const win = window.open(url, '_blank');
      if (!win) {
        // เบราว์เซอร์บล็อกการเปิดแท็บใหม่ (popup blocker) — สลับไปดาวน์โหลดไฟล์แทน
        const a = document.createElement('a');
        a.href = url;
        a.download = pdfFilename('html');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setPdfError('เบราว์เซอร์บล็อกการเปิดแท็บใหม่ จึงดาวน์โหลดไฟล์ให้แทน เปิดไฟล์ที่ดาวน์โหลดแล้วเบราว์เซอร์จะเปิดหน้าต่างพิมพ์ให้เอง');
      }
      setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch (err) {
      console.error('Print error:', err);
      const code = err && err.message;
      setPdfError(code === 'NODOM' || code === 'NOPAGE' ? 'ไม่พบหน้าตารางสำหรับสร้างไฟล์ กดกลับไปแก้ตารางแล้วสั่งพิมพ์อีกครั้ง' : 'สั่งพิมพ์ไม่สำเร็จ ลองใช้ปุ่มดาวน์โหลดไฟล์สำหรับพิมพ์แทน');
    }
  };

  /**
   * ดาวน์โหลดไฟล์สำหรับพิมพ์ — ทางเลือกที่ไม่มีทางถูกบล็อก
   * ใช้เมื่อปุ่มสั่งพิมพ์เปิดแท็บใหม่ไม่ได้ หรือกรณีอยากเก็บไฟล์ไว้พิมพ์ทีหลัง
   */
  const downloadPrintFile = () => {
    setPdfError('');
    try {
      const html = buildPrintableHtml();
      const blob = new Blob(['\uFEFF' + html], {
        type: 'text/html;charset=utf-8'
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = pdfFilename('html');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Print file error:', err);
      const code = err && err.message;
      setPdfError(code === 'NODOM' || code === 'NOPAGE' ? 'ไม่พบหน้าตารางสำหรับสร้างไฟล์ กดกลับไปแก้ตารางแล้วสั่งพิมพ์อีกครั้ง' : 'สร้างไฟล์สำหรับพิมพ์ไม่สำเร็จ ลองรีเฟรชหน้านี้แล้วทำอีกครั้ง');
    }
  };
  const handleCellClick = (day, period) => {
    if (viewMode === 'student' && period === activeLunchPeriod) return;
    let existing = null;
    let targetClassId = '';
    if (viewMode === 'student') {
      existing = getSlotData(currentClass, day, period);
      targetClassId = currentClass;
      if ((classSubjects[currentClass] || []).length === 0) {
        requestConfirm('OPEN_SUBJECT_MODAL', null, 'ห้องนี้ยังไม่มีรายวิชา', `ลงรายวิชาให้ห้อง ${activeClassObj.name} ก่อนจึงจะจัดตารางได้ เพิ่มเองทีละวิชา นำเข้าจาก CSV หรือคัดลอกแผนการเรียนจากห้องอื่นก็ได้`, 'เปิดหน้าจัดการวิชา', 'ปิด', false);
        return;
      }
    } else {
      const vSlots = viewMode === 'teacher' ? getSlotsForTeacher(currentTeacherTab, day, period) : getSlotsForRoom(currentRoomTab, day, period);
      existing = vSlots[0];
      targetClassId = existing ? existing.classId : '';
    }
    setEditingSlot({
      day,
      period
    });
    setErrorMsg('');
    setSelectedDuration(1);
    setAllowOverlap(false);
    setModalClassId(targetClassId);

    // ห้องเรียนของคาบนี้เป็นกลุ่มนอกแผนกหรือไม่ (เกิดจากการเปิดคาบเดิมที่เคยตั้งไว้)
    const targetClassObj = targetClassId ? classes.find(c => c.id === targetClassId) : null;
    if (targetClassObj?.external) {
      setIsManualClass(true);
      setManualClassName(targetClassObj.name);
    } else {
      setIsManualClass(false);
      setManualClassName('');
    }
    setExtSubjectForm({
      code: '',
      name: '',
      theory: 0,
      practical: 0,
      credit: 0
    });

    // ตั้งค่าเริ่มต้นของจำนวนคาบที่จะลบ ให้เป็น "ลบจากคาบนี้ไปจนจบก้อน"
    // เพราะกรณีที่พบบ่อยที่สุดคือวางไป 4 คาบแล้วอยากเอาออกทั้งชุด
    const blkForDelete = targetClassId ? getBlockAt(targetClassId, day, period) : null;
    setDeleteCount(blkForDelete ? blkForDelete.periods.filter(p => p >= period).length : 1);
    if (existing && !existing.isFixed) {
      if (targetClassObj?.external) {
        // กลุ่มนอกแผนก: วิชาผูกอยู่ในหลักสูตร "เสมือน" ของห้องนอกแผนกนี้อยู่แล้ว ดึงมาเติมฟอร์มแก้ไขได้เลย
        const extSub = (classSubjects[targetClassId] || []).find(s => s.id === existing.subjectId);
        if (extSub) setExtSubjectForm({
          code: extSub.code || '',
          name: extSub.name || '',
          theory: extSub.theory ?? 0,
          practical: extSub.practical ?? 0,
          credit: extSub.credit ?? 0
        });
        setSelectedSubject(existing.subjectId);
        setIsManualSubject(false);
        setManualSubjectName('');
      } else if (existing.subjectName) {
        setIsManualSubject(true);
        setManualSubjectName(existing.subjectName);
        setSelectedSubject('');
      } else {
        setIsManualSubject(false);
        setManualSubjectName('');
        setSelectedSubject(existing.subjectId);
      }
      if (existing.isManualTeacher) {
        setIsManualTeacher(true);
        setManualTeacherName(existing.teacherName || '');
        setSelectedTeacher('');
      } else {
        setIsManualTeacher(false);
        setSelectedTeacher(existing.teacherId || '');
        setManualTeacherName('');
      }
      const tInfo = teachers.find(t => t.id === existing.teacherId);
      if (existing.roomName) {
        setIsManualRoom(true);
        setManualRoomName(existing.roomName);
        setCustomRoomId('');
      } else {
        setIsManualRoom(false);
        setManualRoomName('');
        setCustomRoomId(existing.roomId || tInfo?.roomId || '');
      }
      setSaveRoomToRegistry(true);
    } else {
      setSelectedSubject('');
      setIsManualSubject(false);
      setManualSubjectName('');
      setSelectedTeacher(viewMode === 'teacher' ? currentTeacherTab : '');
      setIsManualTeacher(false);
      setManualTeacherName('');
      setCustomRoomId(viewMode === 'room' ? currentRoomTab : '');
      setIsManualRoom(false);
      setManualRoomName('');
      setSaveRoomToRegistry(true);
    }
  };
  const handleSaveSlot = () => {
    // --- 1. ห้องเรียน: ถ้าเป็นกลุ่มนอกแผนก หาห้องเสมือนที่เคยสร้างไว้ หรือสร้างใหม่ ---
    let classToSave = modalClassId || currentClass;
    let classToAdd = null;
    if (isManualClass) {
      const cnm = manualClassName.trim();
      if (!cnm) {
        setErrorMsg('กรอกชื่อกลุ่มนักเรียนนอกแผนก หรือเอาเครื่องหมายถูกออกจาก "กลุ่มนอกแผนก" แล้วเลือกห้องเรียนของแผนก');
        return;
      }
      const foundClass = classes.find(c => c.external && c.name.trim().toLowerCase() === cnm.toLowerCase());
      if (foundClass) classToSave = foundClass.id;else {
        classToAdd = {
          id: `c_ext_${Date.now()}`,
          name: cnm,
          external: true,
          level: '',
          year: '',
          room: '',
          studentCount: '',
          advisor: '',
          lunchPeriod: 5
        };
        classToSave = classToAdd.id;
      }
    }
    const hasSubject = isManualClass ? !!extSubjectForm.name.trim() : isManualSubject ? !!manualSubjectName.trim() : !!selectedSubject;
    if (!classToSave || !hasSubject || !isManualTeacher && !selectedTeacher || isManualTeacher && !manualTeacherName.trim() || !selectedDuration) {
      setErrorMsg('กรอกห้องเรียน วิชา ครูผู้สอน และจำนวนคาบให้ครบก่อนบันทึก');
      return;
    }

    // --- 2. วิชา ---
    // วิชานอกแผนก/กลุ่มนอกแผนก: ไม่ผูกกฎเรื่องวิชากิจกรรม (ท0 ป2 น0) ซึ่งใช้ได้เฉพาะวิชาที่ลงทะเบียนในหลักสูตรจริงเท่านั้น
    let finalSubjectId = null;
    let finalSubjectName = null;
    let subjectToAdd = null;
    if (isManualClass) {
      // วิชาของกลุ่มนอกแผนก ผูกเป็นรายวิชาจริงในหลักสูตร "เสมือน" ของห้องนี้
      // ใช้โครงสร้างเดิมทั้งหมด (สี, การนับชั่วโมง, การแสดงผลใน PDF) โดยไม่ต้องเขียนโค้ดแยกอีกชุด
      const existingSubs = classSubjects[classToSave] || [];
      const nm = extSubjectForm.name.trim();
      const code = extSubjectForm.code.trim();
      const found = existingSubs.find(s => s.name.trim().toLowerCase() === nm.toLowerCase() && (s.code || '').trim() === code);
      if (found) {
        finalSubjectId = found.id;
      } else {
        subjectToAdd = {
          id: `s_ext_${Date.now()}`,
          code,
          name: nm,
          theory: Number(extSubjectForm.theory) || 0,
          practical: Number(extSubjectForm.practical) || 0,
          credit: Number(extSubjectForm.credit) || 0,
          colorKey: SUBJECT_COLORS[existingSubs.length % SUBJECT_COLORS.length].key
        };
        finalSubjectId = subjectToAdd.id;
      }
    } else if (isManualSubject) {
      finalSubjectName = manualSubjectName.trim();
    } else {
      finalSubjectId = selectedSubject;
      const subjectInfo = (classSubjects[classToSave] || []).find(s => s.id === selectedSubject);
      const isActivityProps = Number(subjectInfo.theory) === 0 && Number(subjectInfo.practical) === 2 && Number(subjectInfo.credit) === 0;
      const isActivityName = subjectInfo.name.includes('กิจกรรม');
      if (isActivityName && !isActivityProps) {
        setErrorMsg('วิชากิจกรรมต้องกำหนดเป็น ท=0 ป=2 น=0 จึงจะลงตารางได้ แก้ที่หน้าจัดการวิชาก่อน');
        return;
      }
      if (isActivityProps && selectedDuration !== 2) {
        setErrorMsg('วิชากิจกรรมต้องลง 2 คาบติดกันเสมอ');
        return;
      }
    }
    let periodsToSave = [];
    let cursor = editingSlot.period;
    let assigned = 0;
    // ห้องที่เพิ่งสร้างใหม่ (กลุ่มนอกแผนก) ยังไม่อยู่ใน state ตอนนี้ ต้องอ้างจาก classToAdd ด้วย
    const cObj = classes.find(c => c.id === classToSave) || classToAdd || {};
    const cLunch = cObj.lunchPeriod || 5;
    while (assigned < selectedDuration) {
      if (cursor > 11) {
        setErrorMsg(`ลง ${selectedDuration} คาบติดกันจากจุดนี้ไม่ได้ เพราะเลยคาบ 11 ซึ่งเป็นคาบสุดท้ายของวัน`);
        return;
      }
      if (cursor !== cLunch) {
        periodsToSave.push(cursor);
        assigned++;
      }
      cursor++;
    }
    for (let p of periodsToSave) {
      const teacherBusy = schedule.filter(s => s.day === editingSlot.day && s.period === p && s.classId !== classToSave && (isManualTeacher ? s.isManualTeacher && s.teacherName === manualTeacherName.trim() : !s.isManualTeacher && s.teacherId === selectedTeacher));
      // วิชานอกแผนกไม่มี subjectId เทียบด้วยชื่อวิชาแทน ไม่งั้นจะเข้าใจผิดว่าคาบเดิมของตัวเองคือคาบที่ชนกัน
      const classBusy = schedule.filter(s => s.day === editingSlot.day && s.period === p && s.classId === classToSave && (isManualSubject ? s.subjectId || s.subjectName !== finalSubjectName : s.subjectId !== finalSubjectId));
      if (teacherBusy.length > 0 && !allowOverlap) {
        const busyClass = classes.find(c => c.id === teacherBusy[0].classId);
        setErrorMsg(`คาบ ${p} ครูท่านนี้ติดสอนห้อง "${busyClass?.name}" อยู่แล้ว เลือกเวลาอื่น หรือติ๊ก "ให้สอนซ้อนเวลาได้" ด้านล่างหากตั้งใจ`);
        return;
      }
      if (classBusy.length > 0 && !allowOverlap) {
        setErrorMsg(`คาบ ${p} ห้องนี้มีวิชาอื่นเรียนอยู่แล้ว เลือกเวลาอื่น หรือติ๊ก "ให้สอนซ้อนเวลาได้" หากตั้งใจทับ`);
        return;
      }

      // ห้องปฏิบัติการถูกใช้โดยห้องเรียนอื่นอยู่แล้วหรือไม่
      // ห้องที่พิมพ์เองแบบไม่เก็บเข้าทะเบียน ตรวจชนไม่ได้เพราะไม่มีรหัสให้เทียบ
      const effectiveRoomId = isManualRoom ? saveRoomToRegistry ? rooms.find(r => r.name.trim().toLowerCase() === manualRoomName.trim().toLowerCase())?.id || null : null : customRoomId || (!isManualTeacher ? teachers.find(t => t.id === selectedTeacher)?.roomId : null) || null;
      const rc = roomClashAt(effectiveRoomId, editingSlot.day, p, classToSave);
      if (rc && !allowOverlap) {
        const rcCls = classes.find(c => c.id === rc.classId);
        setErrorMsg(`คาบ ${p} ห้อง "${roomLabel(effectiveRoomId)}" ถูกใช้โดย "${rcCls?.name || 'ห้องเรียนอื่น'}" อยู่แล้ว เลือกห้องอื่น เปลี่ยนเวลา หรือติ๊ก "ให้สอนซ้อนเวลาได้" หากใช้ห้องร่วมกันจริง`);
        return;
      }
    }
    const cleaned = schedule.filter(s => !(s.classId === classToSave && s.day === editingSlot.day && periodsToSave.includes(s.period)));
    // จัดการห้องนอกแผนก: เก็บเข้าทะเบียนหรือเป็นข้อความอิสระ ตามที่ผู้ใช้เลือก
    let finalRoomId = customRoomId || null;
    let finalRoomName = null;
    let roomToAdd = null;
    if (isManualRoom) {
      const nm = manualRoomName.trim();
      if (!nm) {
        setErrorMsg('กรอกชื่อห้อง หรือเอาเครื่องหมายถูกออกจาก "ห้องนอกแผนก" แล้วเลือกห้องจากทะเบียน');
        return;
      }
      if (saveRoomToRegistry) {
        const found = rooms.find(r => r.name.trim().toLowerCase() === nm.toLowerCase());
        if (found) finalRoomId = found.id;else {
          roomToAdd = {
            id: `r_ext_${Date.now()}`,
            name: nm,
            note: '',
            external: true
          };
          finalRoomId = roomToAdd.id;
        }
      } else {
        finalRoomId = null;
        finalRoomName = nm;
      }
    }
    const newSlots = periodsToSave.map(p => ({
      classId: classToSave,
      day: editingSlot.day,
      period: p,
      subjectId: finalSubjectId,
      subjectName: finalSubjectName,
      isManualTeacher,
      teacherId: isManualTeacher ? null : selectedTeacher,
      teacherName: isManualTeacher ? manualTeacherName.trim() : null,
      roomId: finalRoomId,
      roomName: finalRoomName
    }));
    saveHistory();
    if (classToAdd) setClasses(prev => [...prev, classToAdd]);
    if (subjectToAdd) setClassSubjects(prev => ({
      ...prev,
      [classToSave]: [...(prev[classToSave] || []), subjectToAdd]
    }));
    if (roomToAdd) setRooms(prev => [...prev, roomToAdd]);
    setSchedule([...cleaned, ...newSlots]);
    setEditingSlot(null);
  };

  // วิชากิจกรรม (ท0 ป2 น0) ต้องอยู่เป็นคู่เสมอ ลบแยกคาบเดียวไม่ได้
  const isActivitySubject = (classId, subjectId) => {
    const info = (classSubjects[classId] || []).find(s => s.id === subjectId);
    return !!info && Number(info.theory) === 0 && Number(info.practical) === 2 && Number(info.credit) === 0;
  };

  /**
   * ข้อมูลประกอบการลบของช่องที่กำลังเปิดอยู่
   * lockWhole = true หมายถึงต้องลบทั้งก้อน เลือกจำนวนไม่ได้
   * (วิชากิจกรรมและคาบตายตัว ซึ่งกฎบังคับให้อยู่เป็นคู่)
   */
  const deleteInfo = (() => {
    if (!editingSlot) return null;
    const cid = modalClassId || currentClass;
    const blk = getBlockAt(cid, editingSlot.day, editingSlot.period);
    if (!blk) return null;
    const fromHere = blk.periods.filter(p => p >= editingSlot.period);
    const lockWhole = blk.slot.isFixed || !blk.slot.isFixed && isActivitySubject(cid, blk.slot.subjectId);
    return {
      classId: cid,
      blk,
      fromHere,
      lockWhole,
      max: lockWhole ? blk.periods.length : fromHere.length,
      targets: lockWhole ? blk.periods : fromHere
    };
  })();
  const handleDeleteSlot = () => {
    if (!deleteInfo) {
      setEditingSlot(null);
      return;
    }
    const {
      classId,
      blk,
      targets,
      lockWhole
    } = deleteInfo;
    const n = lockWhole ? targets.length : Math.max(1, Math.min(Number(deleteCount) || 1, targets.length));
    const toDelete = targets.slice(0, n);
    const nextSchedule = schedule.filter(s => !(s.classId === classId && s.day === editingSlot.day && toDelete.includes(s.period)));
    saveHistory();
    setSchedule(nextSchedule);
    setEditingSlot(null);

    // แจ้งผลพร้อมปุ่มย้อนกลับ เหมือนตอนย้ายคาบ เผลอลบผิดกดคืนได้ทันที
    const subj = blk.slot.isFixed ? null : (classSubjects[classId] || []).find(x => x.id === blk.slot.subjectId);
    const subjNameForToast = subj?.name || blk.slot.subjectName;
    const cls = classes.find(c => c.id === classId);
    let stat = null;
    if (subj) {
      const required = Number(subj.theory || 0) + Number(subj.practical || 0);
      const placed = nextSchedule.filter(s => s.classId === classId && s.subjectId === subj.id).length;
      stat = {
        placed,
        required,
        remain: Math.max(0, required - placed)
      };
    }
    showToast({
      verb: 'ลบ',
      name: blk.slot.isFixed ? blk.slot.label : subjNameForToast || 'คาบเรียน',
      where: `${editingSlot.day} คาบ ${toDelete.join(', ')}`,
      className: cls?.name || '',
      len: toDelete.length,
      stat,
      historyLen: history.length + 1
    });
  };
  const handleAddClass = () => {
    saveHistory();
    const majorText = newClassForm.major.trim() ? `${newClassForm.major.trim()} ` : '';
    const name = `${majorText}${newClassForm.level} ${newClassForm.year}/${newClassForm.room}`;
    const lunchPeriod = newClassForm.level === 'ปวช.' ? 5 : 4;
    const newId = `c${Date.now()}`;
    setClasses([...classes, {
      id: newId,
      name,
      lunchPeriod,
      major: newClassForm.major,
      level: newClassForm.level,
      year: newClassForm.year,
      room: newClassForm.room,
      studentCount: newClassForm.studentCount,
      advisor: newClassForm.advisor
    }]);
    setClassSubjects(prev => ({
      ...prev,
      [newId]: []
    }));
    setSchedule(prev => [...prev, {
      classId: newId,
      day: 'พุธ',
      period: 1,
      isFixed: true,
      label: 'กิจกรรม'
    }, {
      classId: newId,
      day: 'พุธ',
      period: 2,
      isFixed: true,
      label: 'กิจกรรม'
    }]);
    setNewClassForm({
      major: MAJOR_BY_LEVEL['ปวช.'],
      level: 'ปวช.',
      year: 1,
      room: 1,
      studentCount: '',
      advisor: ''
    });
  };
  const handleUpdateClassComplex = (id, field, value) => {
    // ช่องที่พิมพ์ได้ต้องรวมการพิมพ์ต่อเนื่องเป็นขั้นเดียว
    // ส่วนช่องเลือก (ระดับชั้น ชั้นปี ห้อง ที่ปรึกษา) เป็นการกระทำเดี่ยว นับแยกตามปกติ
    const isTyping = field === 'major' || field === 'studentCount' || field === 'name';
    saveHistory(isTyping ? `class:${id}:${field}` : null);
    setClasses(classes.map(c => {
      if (c.id !== id) return c;
      const updated = {
        ...c,
        [field]: value
      };
      if (field === 'level') {
        updated.lunchPeriod = value === 'ปวช.' ? 5 : 4;
        if (value === 'ปวส.' && updated.year > 2) updated.year = 2;
        // สลับชื่อสาขาให้ตรงระดับชั้น เว้นแต่ผู้ใช้ตั้งสาขาอื่นเองไว้แล้ว
        const keepCustom = updated.major && !DEFAULT_MAJORS.includes(String(updated.major).trim());
        if (!keepCustom) updated.major = MAJOR_BY_LEVEL[value];
      }
      if (['major', 'level', 'year', 'room'].includes(field)) {
        const mText = updated.major ? `${String(updated.major).trim()} ` : '';
        updated.name = `${mText}${updated.level || ''} ${updated.year || ''}/${updated.room || ''}`.trim();
      }
      return updated;
    }));
  };
  const handleDeleteClass = id => {
    const target = classes.find(c => c.id === id);
    // เกณฑ์ "ต้องมีอย่างน้อย 1 ห้อง" นับเฉพาะห้องของแผนก ไม่รวมกลุ่มนอกแผนก
    // ลบกลุ่มนอกแผนกให้เหลือ 0 กลุ่มได้ตามปกติ ไม่ใช่ทรัพยากรหลักของระบบ
    if (!target?.external && deptClasses.length <= 1) {
      customAlert('ระบบต้องมีห้องเรียนของแผนกอย่างน้อย 1 ห้อง');
      return;
    }
    requestConfirm('DELETE_CLASS', id, target?.external ? 'ลบกลุ่มนอกแผนก' : 'ลบห้องเรียน', 'ตารางและรายวิชาของห้องนี้จะถูกลบไปด้วยทั้งหมด', target?.external ? 'ลบกลุ่มนอกแผนก' : 'ลบห้องเรียน');
  };
  const handleAddTeacher = () => {
    if (!newTeacherForm.name) return;
    saveHistory();
    setTeachers([...teachers, {
      id: `t${Date.now()}`,
      name: newTeacherForm.name,
      roomId: newTeacherForm.roomId || null
    }]);
    setNewTeacherForm({
      name: '',
      roomId: ''
    });
  };
  const startEditTeacher = t => {
    setEditingTeacherId(t.id);
    setEditTeacherForm({
      name: t.name,
      roomId: t.roomId || ''
    });
  };
  const cancelEditTeacher = () => setEditingTeacherId(null);
  const saveEditTeacher = id => {
    if (!editTeacherForm.name.trim()) {
      customAlert('กรอกชื่อครูผู้สอนก่อนบันทึก');
      return;
    }
    saveHistory();
    setTeachers(teachers.map(t => t.id === id ? {
      ...t,
      name: editTeacherForm.name.trim(),
      roomId: editTeacherForm.roomId || null
    } : t));
    setEditingTeacherId(null);
  };
  // ==========================================
  // จัดการทะเบียนห้อง
  // ==========================================
  const roomUsageCount = roomId => schedule.filter(s => slotRoomId(s) === roomId).length;
  const handleAddRoom = () => {
    const name = newRoomForm.name.trim();
    if (!name) return;
    if (rooms.some(r => r.name.trim().toLowerCase() === name.toLowerCase())) {
      customAlert(`มีห้อง "${name}" ในทะเบียนแล้ว ใช้ชื่ออื่นหรือแก้ไขห้องเดิมแทน`);
      return;
    }
    saveHistory();
    setRooms([...rooms, {
      id: `r${Date.now()}`,
      name,
      note: newRoomForm.note.trim()
    }]);
    setNewRoomForm({
      name: '',
      note: ''
    });
  };
  const startEditRoom = r => {
    setEditingRoomId(r.id);
    setEditRoomForm({
      name: r.name,
      note: r.note || ''
    });
  };
  const cancelEditRoom = () => setEditingRoomId(null);
  const saveEditRoom = id => {
    const name = editRoomForm.name.trim();
    if (!name) {
      customAlert('กรอกชื่อห้องก่อนบันทึก');
      return;
    }
    if (rooms.some(r => r.id !== id && r.name.trim().toLowerCase() === name.toLowerCase())) {
      customAlert(`มีห้อง "${name}" ในทะเบียนแล้ว ใช้ชื่ออื่น`);
      return;
    }
    saveHistory();
    setRooms(rooms.map(r => r.id === id ? {
      ...r,
      name,
      note: editRoomForm.note.trim()
    } : r));
    setEditingRoomId(null);
  };
  const handleDeleteRoom = id => {
    const used = roomUsageCount(id);
    requestConfirm('DELETE_ROOM', id, 'ลบห้องออกจากทะเบียน', used > 0 ? `ห้อง "${roomLabel(id)}" ถูกใช้อยู่ ${used} คาบ ถ้าลบ คาบเหล่านั้นจะกลายเป็นไม่ระบุห้อง และจะไม่ถูกตรวจห้องชนอีก` : `ลบห้อง "${roomLabel(id)}" ออกจากทะเบียน`, 'ลบห้อง');
  };
  const downloadRoomTemplate = () => {
    const template = "ชื่อห้อง,หมายเหตุ\n114,ห้องทฤษฎี\nShop 2,โรงฝึกไฟฟ้า\n147,ห้องปฏิบัติการมอเตอร์";
    const blob = new Blob(["\uFEFF" + template], {
      type: 'text/csv;charset=utf-8;'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "room_template.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const handleRoomFileUpload = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const lines = ev.target.result.replace(/^\uFEFF/, '').split(/\r?\n/).filter(l => l.trim() !== '');
      if (lines.length < 2) {
        customAlert('ไฟล์ต้องมีบรรทัดหัวตาราง และข้อมูลอย่างน้อย 1 บรรทัด');
        return;
      }
      const existing = new Set(rooms.map(r => r.name.trim().toLowerCase()));
      const list = [];
      for (let i = 1; i < lines.length; i++) {
        const row = lines[i].split(',').map(c => c.trim());
        const nm = row[0];
        if (nm && !existing.has(nm.toLowerCase())) {
          existing.add(nm.toLowerCase());
          list.push({
            id: `r_import_${Date.now()}_${i}`,
            name: nm,
            note: row[1] || ''
          });
        }
      }
      if (list.length > 0) {
        saveHistory();
        setRooms(prev => [...prev, ...list]);
        customAlert(`นำเข้าห้องแล้ว ${list.length} ห้อง`);
      } else {
        customAlert('ไม่พบห้องใหม่ในไฟล์ อาจมีอยู่ในทะเบียนแล้วทั้งหมด');
      }
      e.target.value = null;
    };
    reader.readAsText(file);
  };
  const handleDeleteTeacher = id => requestConfirm('DELETE_TEACHER', id, 'ลบครูผู้สอน', 'ครูท่านนี้จะถูกลบออกจากรายชื่อ คาบที่ลงไว้แล้วในตารางจะยังอยู่แต่จะไม่แสดงชื่อครู', 'ลบครูผู้สอน');
  const downloadTeacherTemplate = () => {
    const template = "ชื่อ-สกุล,ห้องสอน\nครูสมชาย ใจดี,114\nTeacher John,147";
    const blob = new Blob(["\uFEFF" + template], {
      type: 'text/csv;charset=utf-8;'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "teacher_template.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const handleTeacherFileUpload = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const lines = ev.target.result.replace(/^\uFEFF/, '').split(/\r?\n/).filter(l => l.trim() !== '');
      if (lines.length < 2) {
        customAlert('ไฟล์ต้องมีบรรทัดหัวตาราง และข้อมูลอย่างน้อย 1 บรรทัด');
        return;
      }
      const list = [];
      const newRooms = [];
      for (let i = 1; i < lines.length; i++) {
        const row = lines[i].split(',').map(c => c.trim());
        if (!row[0]) continue;
        // คอลัมน์ห้องในไฟล์เป็นชื่อห้อง ต้องหาในทะเบียนหรือสร้างใหม่ให้
        const rn = (row[1] || '').trim();
        let rid = null;
        if (rn) {
          const found = [...rooms, ...newRooms].find(r => r.name.trim().toLowerCase() === rn.toLowerCase());
          if (found) rid = found.id;else {
            rid = `r_timp_${Date.now()}_${i}`;
            newRooms.push({
              id: rid,
              name: rn,
              note: ''
            });
          }
        }
        list.push({
          id: `t_import_${Date.now()}_${i}`,
          name: row[0],
          roomId: rid
        });
      }
      if (list.length > 0) {
        saveHistory();
        if (newRooms.length) setRooms(prev => [...prev, ...newRooms]);
        setTeachers(prev => [...prev, ...list]);
        customAlert(`นำเข้าครูผู้สอนแล้ว ${list.length} คน${newRooms.length ? ` และเพิ่มห้องใหม่ ${newRooms.length} ห้อง` : ''}`);
      } else {
        customAlert('ไม่พบข้อมูลที่อ่านได้ในไฟล์ ตรวจสอบว่าคอลัมน์ตรงกับไฟล์ตัวอย่าง');
      }
      e.target.value = null;
    };
    reader.readAsText(file);
  };
  const handleTabDoubleClick = c => {
    setEditingTabId(c.id);
    setEditTabName(c.name);
  };
  const saveTabName = id => {
    // ชื่อห้องเรียนคำนวณจากสาขา ระดับชั้น และเลขห้องเสมอ จึงตั้งเองไม่ได้
    // แท็บห้องเรียนใช้ดับเบิลคลิกเปิดหน้าตั้งค่าแทน เส้นทางนี้จึงเหลือแค่ครูกับห้อง
    if (editTabName.trim()) {
      if (id.startsWith('t')) {
        saveHistory();
        setTeachers(teachers.map(t => t.id === id ? {
          ...t,
          name: editTabName.trim()
        } : t));
      } else if (id.startsWith('r')) {
        saveHistory();
        setRooms(rooms.map(r => r.id === id ? {
          ...r,
          name: editTabName.trim()
        } : r));
      }
    }
    setEditingTabId(null);
  };
  const handleQuickAddTeacher = () => {
    saveHistory();
    const newId = `t${Date.now()}`;
    setTeachers([...teachers, {
      id: newId,
      name: `ครูใหม่ ${teachers.length + 1}`,
      roomId: null
    }]);
    setCurrentTeacherTab(newId);
  };

  /**
   * หาเลขห้องที่ยังว่างในกลุ่มเดียวกัน (สาขา + ระดับชั้น + ชั้นปี)
   *
   * เดิมใช้จำนวนห้องทั้งหมด + 1 ซึ่งพังเมื่อมีห้องเยอะ
   * มี 27 ห้องจะได้ "ห้องที่ 28" ทั้งที่ช่องเลือกมีแค่ 1-10
   * ค่าจึงหลุดออกนอกช่วง แสดงผลไม่ตรงกับข้อมูลจริง
   */
  const nextFreeRoomNo = (major, level, year) => {
    const used = new Set(classes.filter(c => c.level === level && Number(c.year) === Number(year) && (c.major || '').trim() === (major || '').trim()).map(c => Number(c.room)));
    for (let i = 1; i <= MAX_ROOM_NO; i++) if (!used.has(i)) return i;
    return MAX_ROOM_NO;
  };
  const handleQuickAddClass = () => {
    saveHistory();
    const newId = `c${Date.now()}`;
    // ตั้งชื่อด้วยกฎเดียวกับที่ระบบใช้คำนวณชื่อห้อง (สาขา + ระดับ + ชั้นปี/ห้อง)
    // ไม่งั้นชื่อจะกระโดดเปลี่ยนเองทันทีที่ผู้ใช้ไปแก้ค่าใดค่าหนึ่งในหน้าตั้งค่าห้อง
    const major = MAJOR_BY_LEVEL['ปวช.'];
    const n = nextFreeRoomNo(major, 'ปวช.', 1);
    setClasses([...classes, {
      id: newId,
      name: `${major} ปวช. 1/${n}`,
      lunchPeriod: 5,
      major,
      level: 'ปวช.',
      year: 1,
      room: n,
      studentCount: '',
      advisor: ''
    }]);
    setClassSubjects(prev => ({
      ...prev,
      [newId]: []
    }));
    setSchedule(prev => [...prev, {
      classId: newId,
      day: 'พุธ',
      period: 1,
      isFixed: true,
      label: 'กิจกรรม'
    }, {
      classId: newId,
      day: 'พุธ',
      period: 2,
      isFixed: true,
      label: 'กิจกรรม'
    }]);
    setCurrentClass(newId);
  };
  const handleAddSubject = () => {
    if (!newSubjectForm.code || !newSubjectForm.name) return;
    const existing = classSubjects[currentClass] || [];
    if (existing.some(s => (s.code || '').trim().toLowerCase() === newSubjectForm.code.trim().toLowerCase())) {
      customAlert(`รหัสวิชา ${newSubjectForm.code} มีอยู่ในห้องนี้แล้ว ใช้รหัสอื่นหรือแก้ไขวิชาเดิมแทน`);
      return;
    }
    saveHistory();
    const colorKey = newSubjectForm.colorKey || SUBJECT_COLORS[existing.length % SUBJECT_COLORS.length].key;
    setClassSubjects(prev => ({
      ...prev,
      [currentClass]: [...existing, {
        id: `s${Date.now()}`,
        code: newSubjectForm.code,
        name: newSubjectForm.name,
        theory: Number(newSubjectForm.theory),
        practical: Number(newSubjectForm.practical),
        credit: Number(newSubjectForm.credit),
        colorKey
      }]
    }));
    setNewSubjectForm({
      code: '',
      name: '',
      theory: 0,
      practical: 0,
      credit: 0,
      colorKey: ''
    });
  };
  const handleDeleteSubject = id => {
    saveHistory();
    setClassSubjects(prev => ({
      ...prev,
      [currentClass]: (prev[currentClass] || []).filter(s => s.id !== id)
    }));
    setSchedule(schedule.filter(s => s.subjectId !== id));
  };

  /**
   * จัดลำดับรายวิชาด้วยการลาก
   * ลำดับใน classSubjects[classId] เป็นแหล่งความจริงเดียวที่ใช้ทั้งตารางสรุปในหน้าจอ
   * และตารางสรุปในเอกสาร PDF — สลับตำแหน่งตรงนี้จุดเดียว จะสะท้อนไปทุกที่โดยอัตโนมัติ
   */
  const reorderSubject = (classId, fromId, toId) => {
    if (fromId === toId) return;
    setClassSubjects(prev => {
      const list = [...(prev[classId] || [])];
      const fromIdx = list.findIndex(s => s.id === fromId);
      const toIdx = list.findIndex(s => s.id === toId);
      if (fromIdx === -1 || toIdx === -1) return prev;
      const [moved] = list.splice(fromIdx, 1);
      list.splice(toIdx, 0, moved);
      return {
        ...prev,
        [classId]: list
      };
    });
  };
  const startEditSubject = s => {
    setEditingSubjectId(s.id);
    setEditSubjectForm({
      code: s.code || '',
      name: s.name || '',
      theory: s.theory ?? 0,
      practical: s.practical ?? 0,
      credit: s.credit ?? 0,
      colorKey: s.colorKey || normalizeSubjectColor(s).key
    });
  };
  const cancelEditSubject = () => setEditingSubjectId(null);
  const saveEditSubject = id => {
    if (!editSubjectForm.name.trim()) {
      customAlert('กรอกชื่อวิชาก่อนบันทึก');
      return;
    }
    const dup = (classSubjects[currentClass] || []).some(s => s.id !== id && (s.code || '').trim().toLowerCase() === editSubjectForm.code.trim().toLowerCase());
    if (dup) {
      customAlert(`รหัสวิชา ${editSubjectForm.code} มีอยู่ในห้องนี้แล้ว ใช้รหัสอื่น`);
      return;
    }
    saveHistory();
    setClassSubjects(prev => ({
      ...prev,
      [currentClass]: (prev[currentClass] || []).map(s => s.id === id ? {
        ...s,
        code: editSubjectForm.code,
        name: editSubjectForm.name,
        theory: Number(editSubjectForm.theory) || 0,
        practical: Number(editSubjectForm.practical) || 0,
        credit: Number(editSubjectForm.credit) || 0,
        colorKey: editSubjectForm.colorKey || s.colorKey
      } : s)
    }));
    setEditingSubjectId(null);
  };
  const handleCopyPlan = () => {
    if (!copySourceClassId) return;
    saveHistory();
    const src = classSubjects[copySourceClassId] || [];
    const cloned = src.map(s => ({
      ...s,
      id: `s_copy_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
    }));
    setClassSubjects(prev => ({
      ...prev,
      [currentClass]: [...(prev[currentClass] || []), ...cloned]
    }));
    customAlert(`คัดลอกมาแล้ว ${cloned.length} วิชา`);
    setCopySourceClassId('');
  };
  const downloadTemplate = () => {
    const template = "รหัสวิชา,ชื่อวิชา,ท,ป,น\n20000-1401,คณิตศาสตร์อุตสาหกรรม,2,0,2\n20000-1301,วิทยาศาสตร์ประยุกต์,2,2,3\n20000-2001,กิจกรรมชมรมวิชาชีพ,0,2,0";
    const blob = new Blob(["\uFEFF" + template], {
      type: 'text/csv;charset=utf-8;'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "subject_template.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const handleFileUpload = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const lines = ev.target.result.replace(/^\uFEFF/, '').split(/\r?\n/).filter(l => l.trim() !== '');
      if (lines.length < 2) {
        customAlert('ไฟล์ต้องมีบรรทัดหัวตาราง และข้อมูลอย่างน้อย 1 บรรทัด');
        return;
      }
      const list = [];
      const base = (classSubjects[currentClass] || []).length;
      for (let i = 1; i < lines.length; i++) {
        const row = lines[i].split(',').map(c => c.trim());
        if (row.length >= 5) {
          list.push({
            id: `s_import_${Date.now()}_${i}`,
            code: row[0],
            name: row[1],
            theory: Number(row[2]) || 0,
            practical: Number(row[3]) || 0,
            credit: Number(row[4]) || 0,
            colorKey: SUBJECT_COLORS[(base + i - 1) % SUBJECT_COLORS.length].key
          });
        }
      }
      if (list.length > 0) {
        saveHistory();
        setClassSubjects(prev => ({
          ...prev,
          [currentClass]: [...(prev[currentClass] || []), ...list]
        }));
        customAlert(`นำเข้าแล้ว ${list.length} วิชา เข้าห้อง ${activeClassObj.name}`);
      } else {
        customAlert('ไม่พบข้อมูลที่อ่านได้ในไฟล์ ตรวจสอบว่ามีครบ 5 คอลัมน์ตามไฟล์ตัวอย่าง');
      }
      e.target.value = null;
    };
    reader.readAsText(file);
  };

  // ==========================================
  // 8. หน้ากระดาษสำหรับ PDF
  // ==========================================
  const renderPrintablePage = (classObj, index, total = 1) => {
    const classId = classObj.id;
    const lunchPeriod = classObj.lunchPeriod || 5;
    const summaryData = calculateClassSummary(classId, classSubjects[classId]);
    return /*#__PURE__*/React.createElement("div", {
      key: classId,
      className: "pdf-page",
      style: {
        fontFamily: PRINT_FONT,
        width: '1122px',
        height: '793px',
        padding: '30px 40px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        background: '#fff',
        color: '#000',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 10px 30px rgba(15,30,61,.15)',
        marginBottom: '32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: '16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: '8px'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: '31px',
        fontWeight: 800,
        margin: '0 0 8px 0'
      }
    }, "ตารางเรียน ", classObj.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '17px',
        fontWeight: 700,
        margin: 0
      }
    }, "ปีการศึกษา ", config.year, " ภาคเรียนที่ ", config.term)), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        fontSize: '15px'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 6px 0'
      }
    }, "ระดับชั้น: ", classObj.level, " ปีที่: ", classObj.year, " ห้อง: ", classObj.room, " ", classObj.major && `สาขางาน: ${classObj.major}`), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "จำนวนนักเรียน: ", classObj.studentCount || '-', " คน | ครูที่ปรึกษา: ", classObj.advisor || '-'))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: '2px solid #000',
        width: '100%'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '16px',
        flex: 1,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '68%'
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'center',
        tableLayout: 'fixed'
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        padding: '4px',
        fontSize: '15px',
        width: '78px'
      }
    }, "วัน/เวลา"), PERIODS.map(p => {
      const isLunch = p.id === lunchPeriod;
      return /*#__PURE__*/React.createElement("th", {
        key: p.id,
        style: {
          border: '1px solid #111',
          backgroundColor: '#EFF1F4',
          padding: '4px',
          width: isLunch ? '40px' : 'auto'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '15px',
          fontWeight: 700,
          fontFamily: PRINT_FONT
        }
      }, isLunch ? 'พัก' : p.id), !isLunch && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '11.5px',
          fontWeight: 400,
          fontFamily: PRINT_FONT
        }
      }, p.rawTime));
    }))), /*#__PURE__*/React.createElement("tbody", null, DAYS.map((day, dayIndex) => /*#__PURE__*/React.createElement("tr", {
      key: day
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        fontWeight: 700,
        fontSize: '17px',
        height: '76px'
      }
    }, day), PERIODS.map(period => {
      if (period.id === lunchPeriod) {
        if (dayIndex === 0) {
          return /*#__PURE__*/React.createElement("td", {
            key: `lunch-${period.id}`,
            rowSpan: 5,
            style: {
              border: '1px solid #111',
              backgroundColor: '#FAFAFA',
              position: 'relative',
              width: '40px',
              padding: 0
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '120px',
              height: '24px',
              marginLeft: '-60px',
              marginTop: '-12px',
              transform: 'rotate(90deg)',
              textAlign: 'center',
              lineHeight: '24px',
              fontSize: '18px',
              fontWeight: 700,
              whiteSpace: 'nowrap',
              letterSpacing: '2px'
            }
          }, "พักกลางวัน"));
        }
        return null;
      }
      const slotData = getSlotData(classId, day, period.id);
      if (slotData?.isFixed) {
        return /*#__PURE__*/React.createElement("td", {
          key: period.id,
          style: {
            border: '1px solid #111',
            backgroundColor: '#EFF1F4',
            verticalAlign: 'middle',
            padding: '4px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: '15px',
            fontWeight: 700
          }
        }, slotData.label));
      }
      const subjectInfo = slotSubjectInfo(slotData);
      const teacherInfo = slotData && !slotData.isManualTeacher ? teachers.find(t => t.id === slotData.teacherId) : null;
      const displayRoom = slotRoomText(slotData);
      const displayTeacherName = slotData?.isManualTeacher ? slotData.teacherName : teacherInfo?.name;
      const pal = subjectInfo ? subjectInfo.pal : null;
      return /*#__PURE__*/React.createElement("td", {
        key: period.id,
        style: {
          border: '1px solid #111',
          verticalAlign: 'top',
          padding: '2px',
          backgroundColor: pal ? pal.bg : 'white'
        }
      }, slotData && /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          minHeight: '70px'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'right',
          fontSize: '11.5px',
          fontWeight: 700,
          color: '#374151',
          height: '14px',
          fontFamily: PRINT_FONT
        }
      }, displayRoom || '\u00A0'), /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'center',
          fontSize: '13.5px',
          fontWeight: 700,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 1.2
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }
      }, subjectInfo?.name)), /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'center',
          fontSize: '11.5px',
          color: '#1f2937',
          height: '14px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        }
      }, getFirstName(displayTeacherName))));
    })))))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '32%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid #111',
        borderBottom: 'none',
        backgroundColor: '#EFF1F4',
        padding: '6px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '17px',
        fontWeight: 700
      }
    }, "โครงสร้างรายวิชา"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        fontSize: '12.5px',
        fontWeight: 700,
        marginTop: '4px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#BC1C2B'
      }
    }, "ยังไม่จัด"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#B4740B'
      }
    }, "ยังไม่ครบ"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#15795A'
      }
    }, "ครบแล้ว"))), renderPDFSummaryTable(summaryData, true))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid #9CA3AF',
        marginTop: 8,
        paddingTop: 5,
        display: 'flex',
        justifyContent: 'flex-end',
        fontSize: 12,
        color: '#4B5563'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: PRINT_FONT
      }
    }, "พิมพ์ ", new Date().toLocaleDateString('th-TH'), total > 1 ? ` · หน้า ${index + 1}/${total}` : '')));
  };
  const renderTeacherPrintablePage = (teacherObj, index, total = 1) => {
    const tId = teacherObj.id;
    const summaryData = calculateTeacherSummary(tId, schedule, classSubjects);
    return /*#__PURE__*/React.createElement("div", {
      key: tId,
      className: "pdf-page",
      style: {
        fontFamily: PRINT_FONT,
        width: '1122px',
        height: '793px',
        padding: '30px 40px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        background: '#fff',
        color: '#000',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 10px 30px rgba(15,30,61,.15)',
        marginBottom: '32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: '16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: '8px'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: '31px',
        fontWeight: 800,
        margin: '0 0 8px 0'
      }
    }, "ตารางสอน ", teacherObj.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '17px',
        fontWeight: 700,
        margin: 0
      }
    }, "ปีการศึกษา ", config.year, " ภาคเรียนที่ ", config.term)), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        fontSize: '15px'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 6px 0'
      }
    }, "ห้องประจำ: ", roomLabel(teacherObj.roomId) || '-'), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "ชั่วโมงสอนทั้งหมด: ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontFamily: PRINT_FONT,
        fontSize: '17px'
      }
    }, summaryData.sumHours), " คาบ/สัปดาห์"))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: '2px solid #000',
        width: '100%'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '16px',
        flex: 1,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '68%'
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'center',
        tableLayout: 'fixed'
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        padding: '4px',
        fontSize: '15px',
        width: '78px'
      }
    }, "วัน/เวลา"), PERIODS.map(p => /*#__PURE__*/React.createElement("th", {
      key: p.id,
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        padding: '4px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '15px',
        fontWeight: 700,
        fontFamily: PRINT_FONT
      }
    }, p.id), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '11.5px',
        fontFamily: PRINT_FONT
      }
    }, p.rawTime))))), /*#__PURE__*/React.createElement("tbody", null, DAYS.map(day => /*#__PURE__*/React.createElement("tr", {
      key: day
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        fontWeight: 700,
        fontSize: '17px',
        height: '76px'
      }
    }, day), PERIODS.map(period => {
      const slots = getSlotsForTeacher(tId, day, period.id);
      const count = slots.length;
      const totalStudents = slots.reduce((sum, slot) => {
        const cInfo = classes.find(c => c.id === slot.classId);
        return sum + (parseInt(cInfo?.studentCount, 10) || 0);
      }, 0);
      return /*#__PURE__*/React.createElement("td", {
        key: period.id,
        style: {
          border: '1px solid #111',
          verticalAlign: 'top',
          padding: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          minHeight: '70px'
        }
      }, slots.map((slotData, i) => {
        const subjectInfo = slotSubjectInfo(slotData);
        const classInfo = classes.find(c => c.id === slotData.classId);
        const displayRoom = slotRoomText(slotData) || roomLabel(teacherObj.roomId);
        let topFs = 11.5,
          midFs = 13.5,
          botFs = 11.5;
        if (count === 2) {
          topFs = 10;
          midFs = 12;
          botFs = 10;
        } else if (count >= 3) {
          topFs = 8.5;
          midFs = 10;
          botFs = 8.5;
        }
        const pal = subjectInfo ? subjectInfo.pal : null;
        return /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2px',
            borderBottom: i < count - 1 ? '1px solid #9ca3af' : 'none',
            backgroundColor: pal ? pal.bg : '#fff'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: `${topFs}px`,
            fontWeight: 700,
            fontFamily: PRINT_FONT
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: '#1e40af'
          }
        }, totalStudents > 0 ? `นร.${totalStudents}` : '\u00A0'), /*#__PURE__*/React.createElement("span", {
          style: {
            color: '#374151'
          }
        }, displayRoom || '\u00A0')), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: `${midFs}px`,
            fontWeight: 700,
            lineHeight: 1.2
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: '-webkit-box',
            WebkitLineClamp: count > 1 ? 1 : 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }
        }, subjectInfo?.name)), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: `${botFs}px`,
            color: '#1e3a8a',
            fontWeight: 700,
            textAlign: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }
        }, classInfo?.name));
      })));
    })))))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '32%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid #111',
        borderBottom: 'none',
        backgroundColor: '#EFF1F4',
        padding: '6px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '17px',
        fontWeight: 700
      }
    }, "สรุปภาระงานสอน")), renderPDFSummaryTable(summaryData, false))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid #9CA3AF',
        marginTop: 8,
        paddingTop: 5,
        display: 'flex',
        justifyContent: 'flex-end',
        fontSize: 12,
        color: '#4B5563'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: PRINT_FONT
      }
    }, "พิมพ์ ", new Date().toLocaleDateString('th-TH'), total > 1 ? ` · หน้า ${index + 1}/${total}` : '')));
  };
  const renderRoomPrintablePage = (roomObj, index, total = 1) => {
    const rid = roomObj.id;
    const summaryData = calculateRoomSummary(rid, schedule, classSubjects, classes, slotRoomId);
    return /*#__PURE__*/React.createElement("div", {
      key: rid,
      className: "pdf-page",
      style: {
        fontFamily: PRINT_FONT,
        width: `${PAGE_W}px`,
        height: `${PAGE_H}px`,
        padding: '30px 40px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        background: '#fff',
        color: '#000',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 10px 30px rgba(15,30,61,.15)',
        marginBottom: '32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: '16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: '8px'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: '31px',
        fontWeight: 800,
        margin: '0 0 8px 0'
      }
    }, "ตารางการใช้ห้อง ", roomObj.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '17px',
        fontWeight: 700,
        margin: 0
      }
    }, "ปีการศึกษา ", config.year, " ภาคเรียนที่ ", config.term)), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        fontSize: '15px'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 6px 0'
      }
    }, roomObj.note || '\u00A0'), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "ถูกใช้ ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700
      }
    }, summaryData.sumHours), " จาก ", DAYS.length * 11, " คาบ · ว่าง ", DAYS.length * 11 - summaryData.sumHours, " คาบ"))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: '2px solid #000',
        width: '100%'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '16px',
        flex: 1,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '68%'
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'center',
        tableLayout: 'fixed'
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        padding: '4px',
        fontSize: '15px',
        width: '78px'
      }
    }, "วัน/เวลา"), PERIODS.map(p => /*#__PURE__*/React.createElement("th", {
      key: p.id,
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        padding: '4px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '15px',
        fontWeight: 700,
        fontFamily: PRINT_FONT
      }
    }, p.id), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '11.5px',
        fontFamily: PRINT_FONT
      }
    }, p.rawTime))))), /*#__PURE__*/React.createElement("tbody", null, DAYS.map(day => /*#__PURE__*/React.createElement("tr", {
      key: day
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        border: '1px solid #111',
        backgroundColor: '#EFF1F4',
        fontWeight: 700,
        fontSize: '17px',
        height: '76px'
      }
    }, day), PERIODS.map(period => {
      const slots = getSlotsForRoom(rid, day, period.id);
      const count = slots.length;
      return /*#__PURE__*/React.createElement("td", {
        key: period.id,
        style: {
          border: '1px solid #111',
          verticalAlign: 'top',
          padding: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          minHeight: '70px'
        }
      }, slots.map((slotData, i) => {
        const subjectInfo = slotSubjectInfo(slotData);
        const classInfo = classes.find(c => c.id === slotData.classId);
        const tInfo = !slotData.isManualTeacher ? teachers.find(t => t.id === slotData.teacherId) : null;
        const tName = slotData.isManualTeacher ? slotData.teacherName : tInfo?.name;
        let topFs = 11.5,
          midFs = 13.5,
          botFs = 11.5;
        if (count === 2) {
          topFs = 10;
          midFs = 12;
          botFs = 10;
        } else if (count >= 3) {
          topFs = 8.5;
          midFs = 10;
          botFs = 8.5;
        }
        const pal = subjectInfo ? subjectInfo.pal : null;
        return /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2px',
            borderBottom: i < count - 1 ? '1px solid #9ca3af' : 'none',
            backgroundColor: pal ? pal.bg : '#fff'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: `${topFs}px`,
            fontWeight: 700,
            color: '#1e3a8a',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }
        }, classInfo?.name), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: `${midFs}px`,
            fontWeight: 700,
            lineHeight: 1.2
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: '-webkit-box',
            WebkitLineClamp: count > 1 ? 1 : 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }
        }, slotData.isFixed ? slotData.label : subjectInfo?.name)), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: `${botFs}px`,
            color: '#1f2937',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }
        }, getFirstName(tName)));
      })));
    })))))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '32%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid #111',
        borderBottom: 'none',
        backgroundColor: '#EFF1F4',
        padding: '6px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '17px',
        fontWeight: 700
      }
    }, "สรุปการใช้ห้อง")), renderPDFSummaryTable(summaryData, false))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid #9CA3AF',
        marginTop: 8,
        paddingTop: 5,
        display: 'flex',
        justifyContent: 'flex-end',
        fontSize: 12,
        color: '#4B5563'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: PRINT_FONT
      }
    }, "พิมพ์ ", new Date().toLocaleDateString('th-TH'), total > 1 ? ` · หน้า ${index + 1}/${total}` : '')));
  };

  // ==========================================
  // 9. Design system (CSS)
  // ==========================================
  const styles = `
    :root{
      --ink:#0F1E3D; --ink-2:#1C3160; --ink-3:#48597D;
      --rule:#CFD5DF; --rule-soft:#E4E8EE;
      --paper:#ECEEF3; --surface:#FFFFFF; --surface-2:#F7F8FA;
      --accent:#D9741A; --accent-soft:#FCF1E6; --accent-line:#EEBE8B;
      --ok:#15795A; --ok-soft:#E5F3ED;
      --warn:#A9700B; --warn-soft:#FBF3E0;
      --danger:#B81F2D; --danger-soft:#FBEBED;
    }

    .tt *{ font-family:${PRINT_FONT}; box-sizing:border-box; }

    /* ---- สั่งพิมพ์จากหน้านี้โดยตรง ----
       ใช้ visibility ไม่ใช่ display เพื่อไม่ให้ layout ของตารางพังตอนพิมพ์ */
    @media print{
      html, body{ background:#fff !important; -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important; }
      body *{ visibility:hidden !important; -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important; }
      #pdf-render-area, #pdf-render-area *{ visibility:visible !important; }
      #pdf-render-area{
        position:absolute !important; left:0 !important; top:0 !important;
        width:${PAGE_W}px !important; display:block !important; padding:0 !important;
      }
      .no-print{ display:none !important; }
    }
${PRINT_PAGE_CSS}
    .tt{ background:var(--paper); color:var(--ink); min-height:100vh; }
    /* ไม่เปลี่ยนฟอนต์ เปิดแค่เลขความกว้างเท่ากันเพื่อให้คอลัมน์ตัวเลขเรียงตรง */
    .mono{ font-variant-numeric:tabular-nums; font-feature-settings:'tnum' 1; }
    .tt button:focus-visible, .tt input:focus-visible, .tt select:focus-visible{
      outline:2px solid var(--accent); outline-offset:1px;
    }
    @media (prefers-reduced-motion: reduce){ .tt *{ transition:none !important; animation:none !important; } }

    /* ---- แถบบนสุด ---- */
    .rail{ background:var(--ink); color:#fff; }
    /* โลโก้มุมบนซ้ายกดกลับหน้าแรกได้ ต้องมีสัญญาณให้รู้ว่ากดได้ */
    .brand{
      display:flex; align-items:center; gap:8px; flex-shrink:0;
      padding:5px 9px 5px 5px; margin-left:-5px; border-radius:7px;
      color:#fff; background:transparent; transition:background .12s;
    }
    .brand:hover{ background:rgba(255,255,255,.11); }
    .brand:active{ background:rgba(255,255,255,.06); }
    .rail-btn{
      display:inline-flex; align-items:center; gap:6px; padding:5px 10px; border-radius:6px;
      font-size:17px; font-weight:600; color:#C6D0E2; background:transparent;
      border:1px solid transparent; transition:background .12s, color .12s; white-space:nowrap;
    }
    .rail-btn:hover:not(:disabled){ background:rgba(255,255,255,.09); color:#fff; }
    .rail-btn:disabled{ opacity:.35; cursor:not-allowed; }
    .rail-sep{ width:1px; height:24px; background:rgba(255,255,255,.16); }
    .chip{
      display:inline-flex; align-items:center; gap:5px; padding:3px 8px; border-radius:5px;
      font-size:15px; font-weight:700; letter-spacing:.2px;
    }
    .chip-dark{ background:rgba(255,255,255,.10); color:#D7DFEC; }
    .chip-btn{ transition:background .12s, color .12s; }
    .chip-btn:hover{ background:rgba(255,255,255,.2); color:#fff; }

    /* ---- ปุ่มสลับมุมมอง ---- */
    .seg{ display:flex; background:rgba(255,255,255,.09); border-radius:7px; padding:2px; gap:2px; }
    .seg-btn{
      display:inline-flex; align-items:center; gap:6px; padding:6px 14px; border-radius:5px;
      font-size:17px; font-weight:700; color:#B9C5DA; transition:background .12s,color .12s; white-space:nowrap;
    }
    .seg-btn:hover{ color:#fff; }
    .seg-on{ background:#fff; color:var(--ink); }
    .seg-on:hover{ color:var(--ink); }

    /* ---- แถบข้อมูลบริบท ---- */
    .context-bar{
      background:var(--surface); border-bottom:1px solid var(--rule);
      display:flex; align-items:center; justify-content:space-between; gap:16px;
      padding:10px 16px; flex-wrap:wrap;
    }
    .eyebrow{ font-size:14px; font-weight:700; letter-spacing:1.2px; text-transform:uppercase; color:var(--ink-3); }
    .meta{ display:flex; align-items:baseline; gap:5px; font-size:17px; color:var(--ink-3); }
    .meta b{ color:var(--ink); font-weight:700; }

    /* ---- ตารางหลัก ---- */
    .grid-wrap{ background:var(--surface); overflow:auto; }

    /* แถบเลื่อนแนวนอนของตารางคือตัวควบคุมหลักเวลาจอไม่กว้างพอ
       ค่าปริยายของเบราว์เซอร์บางระบบบางมากและจางหายเมื่อหยุดเลื่อน
       จึงบังคับให้หนาและมีสีเข้มพอที่จะมองเห็นและลากได้ง่ายตลอดเวลา */
    .grid-wrap{ scrollbar-width:auto; scrollbar-color:var(--ink-3) var(--surface-2); }
    .grid-wrap::-webkit-scrollbar{ height:16px; width:14px; }
    .grid-wrap::-webkit-scrollbar-track{
      background:var(--surface-2); border-top:1px solid var(--rule);
    }
    .grid-wrap::-webkit-scrollbar-thumb{
      background:var(--ink-3); border-radius:9px;
      border:3px solid var(--surface-2); min-width:64px;
    }
    .grid-wrap::-webkit-scrollbar-thumb:hover{ background:var(--ink-2); }
    .grid-wrap::-webkit-scrollbar-thumb:active{ background:var(--accent); }
    .grid-wrap::-webkit-scrollbar-corner{ background:var(--surface-2); }
    .grid-tbl{ width:100%; border-collapse:collapse; table-layout:fixed; min-width:1120px; }
    .grid-tbl th, .grid-tbl td{ border-right:1px solid var(--rule-soft); border-bottom:1px solid var(--rule-soft); }
    .grid-tbl thead th{
      background:var(--surface-2); border-bottom:1px solid var(--rule);
      padding:6px 2px; position:sticky; top:0; z-index:5;
    }
    .p-num{ font-size:17.5px; font-weight:600; color:var(--ink); line-height:1; }
    .p-time{ font-size:13.5px; color:var(--ink-3); line-height:1.35; margin-top:3px; }
    .day-cell{
      background:var(--surface-2); position:sticky; left:0; z-index:4;
      border-right:1px solid var(--rule); width:88px;
      font-weight:700; font-size:17.5px; text-align:center; color:var(--ink);
    }
    .grid-tbl thead .day-cell{ z-index:6; }
    .slot-td{ padding:3px; vertical-align:top; height:94px; transition:background .1s; }
    .slot-td.empty:hover{ background:var(--accent-soft); cursor:pointer; }
    .slot-td.filled{ cursor:pointer; }
    .slot-empty{
      height:100%; min-height:86px; border:1px dashed var(--rule); border-radius:5px;
      display:flex; align-items:center; justify-content:center;
      font-size:15px; font-weight:700; color:var(--accent);
      opacity:0; transition:opacity .12s;
    }
    .slot-td.empty:hover .slot-empty{ opacity:1; }
    @media (hover:none){ .slot-empty{ opacity:.35; } }

    .card{
      height:100%; min-height:86px; border-radius:5px; border-left:3px solid;
      padding:5px 6px 4px; display:flex; flex-direction:column; position:relative; overflow:hidden;
      box-shadow:0 1px 2px rgba(15,30,61,.06); transition:box-shadow .12s, transform .12s;
    }
    .card:hover{ box-shadow:0 3px 8px rgba(15,30,61,.14); transform:translateY(-1px); }
    .card + .card{ margin-top:3px; }
    .card-top{ display:flex; justify-content:space-between; align-items:center; gap:4px; font-size:13px; font-weight:600; line-height:1; opacity:.75; }
    .card-name{
      flex:1; display:flex; align-items:center; font-size:16px; font-weight:700; line-height:1.25;
      margin:3px 0; overflow:hidden;
    }
    .card-name span{ display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden; }
    .card-foot{ font-size:13.5px; font-weight:600; opacity:.8; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; line-height:1.2; }
    .card-fixed{
      height:100%; min-height:86px; border-radius:5px; border:1px dashed var(--ink-3);
      background:repeating-linear-gradient(135deg, #F2F4F8, #F2F4F8 6px, #EAEDF3 6px, #EAEDF3 12px);
      display:flex; flex-direction:column; align-items:center; justify-content:center; gap:2px;
      font-size:15px; font-weight:700; color:var(--ink-2);
    }
    .lunch-td{ background:var(--surface-2); position:relative; padding:0; width:50px; }
    .lunch-label{
      position:absolute; top:50%; left:50%; width:180px; height:26px;
      margin-left:-90px; margin-top:-13px; transform:rotate(90deg);
      text-align:center; line-height:26px; font-size:15.5px; font-weight:700;
      letter-spacing:4px; color:var(--ink-3); white-space:nowrap;
    }

    /* ---- แผ่นงาน (tabs) ---- */
    .sheet-bar{ background:var(--surface-2); border-top:1px solid var(--rule); display:flex; align-items:stretch; }
    .sheet-scroll{ display:flex; align-items:stretch; overflow-x:auto; flex:1; scrollbar-color:var(--ink-3) var(--surface-2); }
    .sheet-scroll::-webkit-scrollbar{ height:11px; }
    .sheet-scroll::-webkit-scrollbar-track{ background:var(--surface-2); }
    .sheet-scroll::-webkit-scrollbar-thumb{
      background:var(--ink-3); border-radius:7px;
      border:2px solid var(--surface-2); min-width:48px;
    }
    .sheet-scroll::-webkit-scrollbar-thumb:hover{ background:var(--ink-2); }
    .sheet-tab{
      display:flex; align-items:center; justify-content:center; padding:11px 18px;
      font-size:17px; font-weight:600; color:var(--ink-3); background:transparent;
      border-right:1px solid var(--rule-soft); border-top:3px solid transparent;
      white-space:nowrap; cursor:pointer;
      user-select:none; min-width:112px; flex-shrink:0; transition:background .12s,color .12s;
    }
    .sheet-tab:hover{ background:rgba(15,30,61,.04); color:var(--ink); }
    .sheet-tab-on{ background:var(--surface); color:var(--ink); font-weight:700; }
    .sheet-tab-drag{ opacity:.4; }
    .tab-input{
      width:100%; min-width:126px; text-align:center; font-size:17px; font-weight:600;
      border:1px solid var(--accent); border-radius:4px; padding:2px 4px; outline:none; background:#fff;
    }
    .sheet-add{
      display:flex; align-items:center; justify-content:center; padding:0 12px;
      color:var(--ink-3); border-right:1px solid var(--rule-soft); transition:background .12s,color .12s;
    }
    .sheet-add:hover{ background:rgba(15,30,61,.04); color:var(--accent); }

    /* ---- แผงข้าง ---- */
    .panel{ width:396px; flex-shrink:0; background:var(--surface); border-left:1px solid var(--rule); display:flex; flex-direction:column; }
    .panel-head{ padding:12px 14px; border-bottom:1px solid var(--rule); }
    .panel-body{ overflow-y:auto; flex:1; }

    .sum-tbl{ width:100%; border-collapse:collapse; font-size:16.5px; }
    .sum-tbl th{
      background:var(--surface-2); border-bottom:1px solid var(--rule); color:var(--ink-3);
      font-size:13.5px; font-weight:700; letter-spacing:.4px; text-transform:uppercase;
      padding:8px 7px; text-align:center;
    }
    .sum-tbl th.l{ text-align:left; }
    .sum-tbl td{ border-bottom:1px solid var(--rule-soft); padding:9px 7px; text-align:center; }
    .sum-tbl td.l{ text-align:left; }
    .sum-row:hover{ background:var(--surface-2); }
    .sum-code{ font-size:14.5px; color:var(--ink-3); letter-spacing:.2px; }
    .sum-name{ font-size:17px; font-weight:600; color:var(--ink); line-height:1.3; }
    .sum-foot td{ background:var(--surface-2); border-top:1px solid var(--rule); border-bottom:none; font-weight:700; padding:10px 7px; }

    .swatch{ width:10px; height:10px; border-radius:2px; flex-shrink:0; }

    /* ---- แถบขีดนับคาบ (signature) ---- */
    .tick-rail{ display:flex; gap:2px; align-items:center; flex-wrap:wrap; }
    .tick{ width:6px; height:16px; border-radius:1px; background:var(--rule); display:block; }
    .tick-on{ background:var(--ok); }
    .tick-over{ background:var(--danger); }
    .tick-none{ font-size:14px; color:var(--ink-3); }

    /* ---- ปุ่มทั่วไป ---- */
    .btn{
      display:inline-flex; align-items:center; justify-content:center; gap:6px;
      padding:10px 16px; border-radius:6px; font-size:17.5px; font-weight:700;
      border:1px solid var(--rule); background:var(--surface); color:var(--ink);
      transition:background .12s, border-color .12s;
    }
    .btn:hover:not(:disabled){ background:var(--surface-2); border-color:var(--ink-3); }
    .btn:disabled{ opacity:.45; cursor:not-allowed; }
    .btn-primary{ background:var(--ink); color:#fff; border-color:var(--ink); }
    .btn-primary:hover:not(:disabled){ background:var(--ink-2); border-color:var(--ink-2); }
    .btn-accent{ background:var(--accent); color:#fff; border-color:var(--accent); }
    .btn-accent:hover:not(:disabled){ filter:brightness(.94); }
    .btn-danger{ background:var(--danger); color:#fff; border-color:var(--danger); }
    .btn-danger:hover:not(:disabled){ filter:brightness(.94); }
    .btn-ghost-danger{ color:var(--danger); border-color:var(--danger-soft); background:var(--danger-soft); }
    .btn-ghost-danger:hover:not(:disabled){ background:#F8DDE0; border-color:var(--danger); }
    .btn-sm{ padding:7px 12px; font-size:16px; border-radius:5px; }

    /* ---- ฟอร์ม ---- */
    .field{ display:block; }
    .lbl{ display:block; font-size:15px; font-weight:700; color:var(--ink-3); margin-bottom:5px; letter-spacing:.2px; }
    .inp, .sel{
      width:100%; border:1px solid var(--rule); border-radius:6px; padding:10px 12px;
      font-size:17.5px; font-weight:500; color:var(--ink); background:#fff; outline:none;
      transition:border-color .12s;
    }
    .inp:focus, .sel:focus{ border-color:var(--accent); }
    .inp:disabled, .sel:disabled{ background:var(--surface-2); color:var(--ink-3); cursor:not-allowed; }
    .inp-num{ text-align:center; }
    .hint{ font-size:15px; color:var(--ink-3); margin-top:5px; line-height:1.45; }

    /* ---- กล่องข้อความ ---- */
    .note{ border-radius:6px; padding:11px 13px; font-size:16.5px; line-height:1.55; display:flex; gap:8px; }
    .note-err{ background:var(--danger-soft); color:#8C1620; border:1px solid #F0C7CC; }
    .note-info{ background:var(--surface-2); color:var(--ink-3); border:1px solid var(--rule); }

    /* ---- Modal ---- */
    .ov{ position:fixed; inset:0; background:rgba(15,30,61,.42); backdrop-filter:blur(2px); display:flex; align-items:center; justify-content:center; padding:16px; z-index:50; }
    .modal{ background:var(--surface); border-radius:10px; box-shadow:0 24px 60px rgba(15,30,61,.3); width:100%; overflow:hidden; display:flex; flex-direction:column; max-height:92vh; }
    .modal-head{ display:flex; align-items:center; justify-content:space-between; gap:12px; padding:14px 18px; border-bottom:1px solid var(--rule); }
    .modal-title{ font-size:20.5px; font-weight:700; color:var(--ink); }
    .modal-sub{ font-size:15.5px; color:var(--ink-3); margin-top:2px; }
    .modal-body{ padding:18px; overflow-y:auto; }
    .modal-foot{ padding:12px 18px; border-top:1px solid var(--rule); background:var(--surface-2); display:flex; align-items:center; justify-content:space-between; gap:10px; }
    .x-btn{ color:var(--ink-3); padding:4px; border-radius:5px; transition:background .12s,color .12s; }
    .x-btn:hover{ background:var(--surface-2); color:var(--ink); }

    /* ---- กล่องงานย่อยใน modal ---- */
    .box{ border:1px solid var(--rule); border-radius:8px; padding:14px; }
    .box-title{ font-size:17px; font-weight:700; color:var(--ink); display:flex; align-items:center; gap:7px; margin-bottom:11px; }
    .list-row{ border:1px solid var(--rule); border-radius:7px; padding:11px 12px; background:#fff; transition:border-color .12s, box-shadow .12s, opacity .12s; }
    /* จุดจับลากจัดลำดับรายวิชา */
    .drag-handle{
      display:flex; align-items:center; justify-content:center; flex-shrink:0;
      width:20px; height:34px; cursor:grab; color:var(--rule); touch-action:none;
      transition:color .12s;
    }
    .drag-handle:hover{ color:var(--ink-3); }
    .drag-handle:active{ cursor:grabbing; }
    .list-row-dragging{ opacity:.4; }
    .list-row-dragover{ box-shadow:inset 0 3px 0 var(--accent); border-color:var(--accent); }
    .list-row:hover{ border-color:var(--ink-3); }
    .list-row + .list-row{ margin-top:7px; }

    /* ---- ตารางเช็คคิวครูใน modal ---- */
    .mini{ width:100%; border-collapse:collapse; table-layout:fixed; }
    .mini th{ background:var(--surface-2); border:1px solid var(--rule-soft); font-size:12px; font-weight:600; color:var(--ink-3); padding:3px 0; }
    .mini td{ border:1px solid var(--rule-soft); height:29px; padding:0; text-align:center; }
    .mini .free{ background:#fff; }
    .mini .busy{ background:var(--danger); color:#fff; }
    .mini .self{ background:var(--rule-soft); color:var(--ink-3); }
    .mini .plan{ background:var(--accent); color:#fff; }
    .mini .clash{ background:#7E1019; color:#fff; }
    .mini-txt{ font-size:9px; font-weight:700; line-height:1.1; padding:0 1px; overflow:hidden; }
    .mini-legend{ display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin-top:9px; font-size:14.5px; font-weight:600; color:var(--ink-3); }
    .mini-legend i{ width:11px; height:11px; border-radius:2px; display:inline-block; margin-right:4px; vertical-align:-1px; }

    /* ---- แถบเลือกสี ---- */
    .color-row{ display:flex; flex-wrap:wrap; gap:6px; }
    /* ==========================================================
       แถบแจ้งผลมุมล่าง — บอกผลการย้ายโดยไม่ขัดจังหวะการทำงาน
       ========================================================== */
    .toast{
      position:fixed; left:20px; bottom:78px; z-index:280;
      background:var(--ink); color:#fff; border-radius:10px;
      box-shadow:0 18px 44px rgba(15,30,61,.38);
      padding:13px 15px; min-width:320px; max-width:440px;
      display:flex; gap:14px; align-items:flex-start;
      overflow:hidden; animation:toast-in .18s ease-out;
    }
    @keyframes toast-in{ from{ opacity:0; transform:translateY(12px); } to{ opacity:1; transform:none; } }
    .toast-title{ font-size:16.5px; font-weight:700; line-height:1.3; }
    .toast-detail{ font-size:15px; color:#BCC7DA; margin-top:3px; line-height:1.4; }
    .toast-stat{ font-size:15px; font-weight:700; margin-top:6px; line-height:1.4; }
    .toast-done{ color:#8FE3C4; }
    .toast-left{ color:#F2AE68; }
    .toast-btn{
      flex-shrink:0; display:inline-flex; align-items:center; gap:6px;
      padding:8px 12px; border-radius:6px; font-size:15px; font-weight:700;
      background:rgba(255,255,255,.13); color:#fff; transition:background .12s;
    }
    .toast-btn:hover{ background:rgba(255,255,255,.24); }
    /* แถบนับเวลาถอยหลัง ให้รู้ว่าเหลือเวลากดย้อนกลับอีกเท่าไร */
    .toast-bar{
      position:absolute; left:0; bottom:0; height:3px; background:var(--accent);
      animation:toast-bar 6s linear forwards;
    }
    @keyframes toast-bar{ from{ width:100%; } to{ width:0%; } }

    .color-dot{ width:26px; height:26px; border-radius:5px; border:2px solid transparent; transition:transform .1s; }
    .color-dot:hover{ transform:scale(1.08); }
    .color-on{ border-color:var(--ink); }

    /* ==========================================================
       ลากย้ายคาบ
       ========================================================== */
    .card-drag{ cursor:grab; }
    .card-drag:active{ cursor:grabbing; }
    /* ต้นทางที่กำลังลาก จางลงแต่ยังเห็นว่าเดิมอยู่ตรงไหน */
    .card-lifted{ opacity:.28; }

    /* เงาที่ลอยตามเมาส์ ขยับด้วย transform อย่างเดียวเพื่อให้ลื่นไม่กระตุก */
    .drag-ghost{
      position:fixed; left:0; top:0; z-index:300; pointer-events:none;
      border-radius:6px; border-left:4px solid; padding:6px 9px;
      box-shadow:0 14px 32px rgba(15,30,61,.3); opacity:.97;
      will-change:transform; transform:translate3d(-9999px,-9999px,0);
      display:flex; flex-direction:column; justify-content:center;
    }
    .ghost-name{ font-size:15.5px; font-weight:700; line-height:1.25; }
    .ghost-sub{ font-size:13.5px; opacity:.8; margin-top:2px; }
    .ghost-why{
      margin-top:5px; padding-top:5px; border-top:1px solid rgba(0,0,0,.14);
      font-size:14px; font-weight:700; line-height:1.35;
    }
    .ghost-why-ok{ color:var(--accent); }
    .ghost-why-bad{ color:var(--danger); }
    .ghost-why-idle{ color:var(--ink-3); font-weight:600; }

    /* ช่องปลายทาง ระบายทีละคาบเพื่อให้เห็นว่าคาบไหนว่าง คาบไหนชน */
    .drop-ok{ background:var(--accent-soft) !important; box-shadow:inset 0 0 0 2px var(--accent); }
    .drop-bad{ background:#F6D3D7 !important; box-shadow:inset 0 0 0 2px var(--danger); }
    .slot-td.drop-ok .slot-empty, .slot-td.drop-bad .slot-empty{ opacity:0; }
    /* วิชาที่ขวางอยู่ในช่องแดง ให้จางลงเพื่อให้เห็นสีเตือนชัด */
    .slot-td.drop-bad .card{ opacity:.45; }

    /* ขณะลาก ห้ามลากเลือกข้อความและปิด hover ที่รบกวนสายตา */
    body.tt-dragging{ user-select:none; -webkit-user-select:none; cursor:grabbing !important; }
    body.tt-dragging .slot-td.empty:hover{ background:transparent; }

    /* ==========================================================
       ปรับตามความสูงหน้าจอ — ให้เห็นครบทั้ง 5 วันโดยไม่ต้องเลื่อนแนวตั้ง
       เพราะการเลื่อนหาวันจันทร์ทุกครั้งที่จัดตารางเสียเวลาและทำให้เทียบวันยาก
       ========================================================== */
    @media (max-height:920px){
      .slot-td{ height:80px; }
      .slot-empty, .card, .card-fixed{ min-height:72px; }
    }
    @media (max-height:820px){
      .context-bar{ padding:8px 14px; }
      .slot-td{ height:68px; padding:2px; }
      .slot-empty, .card, .card-fixed{ min-height:62px; }
      .card{ padding:4px 5px 3px; }
      .card-name{ font-size:14.5px; margin:2px 0; }
      .panel-head{ padding:10px 12px; }
    }
    @media (max-height:730px){
      .grid-tbl thead th{ padding:4px 2px; }
      .p-time{ font-size:11.5px; margin-top:1px; }
      .slot-td{ height:58px; }
      .slot-empty, .card, .card-fixed{ min-height:52px; }
      .card-name{ font-size:14px; }
      .card-name span{ -webkit-line-clamp:2; }
      .card-top, .card-foot{ font-size:11.5px; }
      .day-cell{ font-size:15.5px; }
      .sheet-tab{ padding:8px 14px; }
    }
    @media (max-height:640px){
      .slot-td{ height:50px; }
      .slot-empty, .card, .card-fixed{ min-height:44px; }
      .card-name span{ -webkit-line-clamp:1; }
      .p-time{ display:none; }
    }

    /* ==========================================================
       ปรับตามความกว้างหน้าจอ — แผงสรุปแคบลงเพื่อคืนพื้นที่ให้ตาราง
       ========================================================== */
    @media (max-width:1400px){
      .panel{ width:336px; }
      /* โน้ตบุ๊กจอ 1366px เป็นขนาดที่พอดีจะล้นออกไปเล็กน้อย
         บีบความกว้างขั้นต่ำลงให้แสดงครบ 11 คาบโดยไม่ต้องเลื่อนแนวนอน */
      .grid-tbl{ min-width:1020px; }
      .day-cell{ width:80px; }
    }
    @media (max-width:1200px){
      .panel{ width:292px; }
      .panel-head{ padding:10px 11px; }
      .sum-tbl{ font-size:15px; }
      .sum-name{ font-size:15.5px; }
      .sum-code{ font-size:13.5px; }
      .sum-tbl th{ font-size:12px; padding:7px 4px; }
      .sum-tbl td{ padding:8px 4px; }
      .sum-foot td{ padding:9px 4px; }
      .context-bar{ padding:8px 12px; gap:10px; }
      .meta{ font-size:15.5px; gap:4px; }
      .grid-tbl{ min-width:960px; }
      .day-cell{ width:74px; }
      /* ข้อมูลที่ดูได้จากที่อื่นอยู่แล้ว ซ่อนไว้ก่อนเพื่อไม่ให้แถบตัดสองบรรทัด */
      .meta-opt{ display:none; }
      .sheet-hint{ display:none; }
    }
    @media (max-width:1000px){
      .panel{ width:252px; }
      .sum-tbl{ font-size:14.5px; }
      .sum-name{ font-size:15px; }
      .rail-btn span{ display:none; }
    }

    /* ==========================================================
       หน้าแรก — ปรับให้ดูมีมิติกว่าแผงทำงานหลัก เพราะเป็นหน้าต้อนรับ
       ========================================================== */
    .home-blob{ position:absolute; border-radius:999px; filter:blur(70px); pointer-events:none; z-index:0; }
    /* พื้นหลังหน้าแรก — ไล่สีหลายชั้น + ลายจุดบางๆ ให้มีเนื้อผ้าแทนพื้นเทาเรียบ */
    .home-wrap{
      background:
        radial-gradient(1100px 640px at 6% -8%, rgba(217,116,26,.20), transparent 58%),
        radial-gradient(900px 720px at 106% 12%, rgba(28,49,96,.22), transparent 55%),
        radial-gradient(760px 560px at 46% 118%, rgba(15,30,61,.14), transparent 55%),
        linear-gradient(165deg, #EFF2F8 0%, #E7EBF3 45%, #ECE7DE 100%);
    }
    .home-wrap::before{
      content:''; position:absolute; inset:0; z-index:0; pointer-events:none; opacity:.55;
      background-image: radial-gradient(rgba(15,30,61,.08) 1px, transparent 1px);
      background-size: 24px 24px;
      -webkit-mask-image: radial-gradient(1000px 700px at 50% 10%, #000 40%, transparent 85%);
      mask-image: radial-gradient(1000px 700px at 50% 10%, #000 40%, transparent 85%);
    }
    .home-card{ position:relative; z-index:1; border-top:4px solid transparent; border-image:linear-gradient(90deg,var(--accent),#F0B274) 1; }
    .seg-light{ display:inline-flex; background:var(--surface-2); border:1px solid var(--rule); border-radius:9px; padding:3px; gap:3px; }
    .seg-light-btn{
      padding:9px 18px; border-radius:6px; font-size:16px; font-weight:700; color:var(--ink-3);
      transition:background .12s,color .12s,box-shadow .12s;
    }
    .seg-light-btn:hover{ color:var(--ink); }
    .seg-light-on{ background:var(--ink); color:#fff; box-shadow:0 1px 3px rgba(15,30,61,.3); }
    .seg-light-on:hover{ color:#fff; }
    .stat-tile{
      display:flex; align-items:center; gap:12px; padding:12px 16px; border-radius:10px;
      background:var(--surface-2); border:1px solid var(--rule-soft);
      transition:transform .12s, box-shadow .12s;
    }
    .stat-tile:hover{ transform:translateY(-2px); box-shadow:0 4px 12px rgba(15,30,61,.08); }
    .stat-icon{ width:38px; height:38px; border-radius:9px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
    .step-num{
      width:26px; height:26px; border-radius:999px; background:var(--accent-soft); color:var(--accent);
      display:flex; align-items:center; justify-content:center; font-weight:800; font-size:13.5px; flex-shrink:0;
      border:1.5px solid var(--accent-line);
    }
    .feature-pill{
      display:flex; align-items:center; gap:8px; padding:8px 14px; border-radius:999px;
      background:var(--surface); border:1px solid var(--rule); font-size:15px; font-weight:600; color:var(--ink-3);
      box-shadow:0 1px 2px rgba(15,30,61,.04);
    }
  `;

  // ==========================================
  // 10. หน้าจอโหลด
  // ==========================================
  if (!isLoaded) {
    return /*#__PURE__*/React.createElement("div", {
      className: "tt",
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("style", null, styles), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Loader2, {
      className: "w-6 h-6 animate-spin",
      style: {
        color: 'var(--accent)',
        margin: '0 auto 10px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17.5,
        fontWeight: 600,
        color: 'var(--ink-3)'
      }
    }, "กำลังเปิดข้อมูลตาราง")));
  }

  // ==========================================
  // 11. หน้าแรก
  // ==========================================
  if (step === 'home') {
    const totalSubjects = Object.values(classSubjects).reduce((a, l) => a + (l?.length || 0), 0);
    const placedSlots = schedule.filter(s => s.subjectId).length;
    return /*#__PURE__*/React.createElement("div", {
      className: "tt home-wrap",
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh'
      }
    }, /*#__PURE__*/React.createElement("style", null, styles), /*#__PURE__*/React.createElement("div", {
      className: "home-blob",
      style: {
        width: 460,
        height: 460,
        top: -170,
        right: -130,
        background: 'radial-gradient(circle, rgba(217,116,26,.28), transparent 70%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "home-blob",
      style: {
        width: 500,
        height: 500,
        bottom: -220,
        left: -170,
        background: 'radial-gradient(circle, rgba(28,49,96,.30), transparent 70%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "home-blob",
      style: {
        width: 360,
        height: 360,
        top: '38%',
        left: '48%',
        background: 'radial-gradient(circle, rgba(217,116,26,.10), transparent 70%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 960,
        position: 'relative',
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        height: 44,
        background: 'linear-gradient(155deg,var(--ink),var(--ink-2))',
        borderRadius: 11,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 4px 14px rgba(15,30,61,.28)'
      }
    }, /*#__PURE__*/React.createElement(Calendar, {
      className: "w-5 h-5",
      style: {
        color: 'var(--accent)'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow"
    }, "แผนกวิชาช่างไฟฟ้า · วิทยาลัยเทคนิคปราจีนบุรี"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        fontWeight: 800,
        letterSpacing: '-.3px',
        marginTop: 3
      }
    }, "ระบบจัดตารางเรียน", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent)'
      }
    }, "และตารางสอน")))), /*#__PURE__*/React.createElement("div", {
      className: "box home-card",
      style: {
        background: 'linear-gradient(180deg, #fff, #FCFBF9)',
        padding: 0,
        overflow: 'hidden',
        boxShadow: '0 24px 56px rgba(28,49,96,.16), 0 4px 14px rgba(217,116,26,.10)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr)',
        gap: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '22px 24px',
        borderBottom: '1px solid var(--rule)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow",
      style: {
        marginBottom: 14
      }
    }, "ตั้งค่าภาคเรียนที่จะจัด"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        flexWrap: 'wrap',
        alignItems: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 190
      }
    }, /*#__PURE__*/React.createElement("label", {
      className: "lbl"
    }, "ปีการศึกษา"), /*#__PURE__*/React.createElement("select", {
      className: "sel",
      value: config.year,
      style: !config.year ? {
        color: 'var(--ink-3)',
        borderColor: 'var(--accent-line)',
        background: 'var(--accent-soft)'
      } : undefined,
      onChange: e => {
        const v = e.target.value;
        setConfig({
          ...config,
          year: v ? parseInt(v) : ''
        });
      }
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "เลือกปีการศึกษา"), YEARS.map(y => /*#__PURE__*/React.createElement("option", {
      key: y,
      value: y
    }, y)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "lbl"
    }, "ภาคเรียน"), /*#__PURE__*/React.createElement("div", {
      className: "seg-light"
    }, [1, 2].map(t => /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setConfig({
        ...config,
        term: t
      }),
      className: `seg-light-btn ${config.term === t ? 'seg-light-on' : ''}`
    }, "ภาคเรียนที่ ", t)))))), hasSavedData ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '22px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 22,
        alignItems: 'stretch',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: 10,
        flex: 1,
        minWidth: 280
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "stat-tile"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stat-icon",
      style: {
        background: 'var(--accent-soft)'
      }
    }, /*#__PURE__*/React.createElement(Users, {
      className: "w-4 h-4",
      style: {
        color: 'var(--accent)'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow"
    }, "ห้องเรียน"), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 22,
        fontWeight: 700,
        marginTop: 1
      }
    }, deptClasses.length))), /*#__PURE__*/React.createElement("div", {
      className: "stat-tile"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stat-icon",
      style: {
        background: '#DCE3F3'
      }
    }, /*#__PURE__*/React.createElement(User, {
      className: "w-4 h-4",
      style: {
        color: '#2A4A8C'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow"
    }, "ครูผู้สอน"), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 22,
        fontWeight: 700,
        marginTop: 1
      }
    }, teachers.length))), /*#__PURE__*/React.createElement("div", {
      className: "stat-tile"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stat-icon",
      style: {
        background: '#E4DEF6'
      }
    }, /*#__PURE__*/React.createElement(BookOpen, {
      className: "w-4 h-4",
      style: {
        color: '#5B3FA6'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow"
    }, "รายวิชา"), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 22,
        fontWeight: 700,
        marginTop: 1
      }
    }, totalSubjects))), /*#__PURE__*/React.createElement("div", {
      className: "stat-tile"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stat-icon",
      style: {
        background: 'var(--ok-soft)'
      }
    }, /*#__PURE__*/React.createElement(Check, {
      className: "w-4 h-4",
      style: {
        color: 'var(--ok)'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow"
    }, "คาบที่จัดแล้ว"), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 22,
        fontWeight: 700,
        marginTop: 1,
        color: 'var(--ok)'
      }
    }, placedSlots)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setCurrentClass(deptClasses[0]?.id || '');
        setStep('timetable');
      },
      disabled: !config.year,
      className: "btn btn-accent",
      style: {
        padding: '13px 22px',
        whiteSpace: 'nowrap'
      }
    }, "เปิดตารางทำงานต่อ ", /*#__PURE__*/React.createElement(ArrowRight, {
      className: "w-4 h-4"
    })), /*#__PURE__*/React.createElement("label", {
      className: "btn",
      style: {
        cursor: 'pointer',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(FolderOpen, {
      className: "w-4 h-4"
    }), " นำเข้าไฟล์", /*#__PURE__*/React.createElement("input", {
      type: "file",
      accept: ".json",
      onChange: e => importBackup(e, true),
      style: {
        display: 'none'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      className: "hint",
      style: {
        marginTop: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, !config.year ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent)',
        fontWeight: 700
      }
    }, "เลือกปีการศึกษาด้านบนก่อนจึงจะเปิดตารางได้") : lastSavedTime ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Save, {
      className: "w-3.5 h-3.5"
    }), " บันทึกล่าสุดเมื่อ ", lastSavedTime) : null, lastSavedTime && config.year && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--rule)'
      }
    }, "·"), /*#__PURE__*/React.createElement("button", {
      onClick: () => requestConfirm('RESET_FROM_HOME', null, 'เริ่มตารางใหม่ทั้งหมด', 'ห้องเรียน รายวิชา ครู และตารางที่บันทึกไว้จะถูกลบทิ้ง สำรองข้อมูลเป็นไฟล์ไว้ก่อนหากยังต้องการใช้', 'ล้างแล้วเริ่มใหม่'),
      style: {
        color: 'var(--danger)',
        fontWeight: 700,
        textDecoration: 'underline',
        textUnderlineOffset: 2
      }
    }, "เริ่มใหม่ทั้งหมด"))) : /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '22px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 26,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        flex: 1,
        minWidth: 280
      }
    }, ['ลงรายวิชาให้แต่ละห้องเรียน', 'เพิ่มรายชื่อครูผู้สอน', 'คลิกช่องในตารางเพื่อวางคาบ ระบบเตือนคาบชนให้อัตโนมัติ'].map((txt, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "step-num"
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        color: 'var(--ink-3)',
        lineHeight: 1.5
      }
    }, txt)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: handleStart,
      disabled: !config.year,
      className: "btn btn-accent",
      style: {
        padding: '13px 22px',
        whiteSpace: 'nowrap'
      }
    }, "เริ่มจัดตาราง ", /*#__PURE__*/React.createElement(ArrowRight, {
      className: "w-4 h-4"
    })), /*#__PURE__*/React.createElement("label", {
      className: "btn",
      style: {
        cursor: 'pointer',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(FolderOpen, {
      className: "w-4 h-4"
    }), " นำเข้าไฟล์ที่เคยทำไว้", /*#__PURE__*/React.createElement("input", {
      type: "file",
      accept: ".json",
      onChange: e => importBackup(e, true),
      style: {
        display: 'none'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      className: "hint",
      style: {
        marginTop: 16
      }
    }, !config.year ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent)',
        fontWeight: 700
      }
    }, "เลือกปีการศึกษาด้านบนก่อนจึงจะเริ่มจัดตารางได้") : 'มีไฟล์สำรอง .json จากเครื่องอื่นอยู่แล้ว กดนำเข้าไฟล์เพื่อทำงานต่อได้ทันที')))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        marginTop: 20
      }
    }, [{
      icon: /*#__PURE__*/React.createElement(AlertCircle, {
        className: "w-3.5 h-3.5"
      }),
      t: 'เตือนคาบชนทันทีที่วาง',
      c: 'var(--danger)'
    }, {
      icon: /*#__PURE__*/React.createElement(Printer, {
        className: "w-3.5 h-3.5"
      }),
      t: 'ออกไฟล์ PDF พร้อมส่ง',
      c: 'var(--accent)'
    }, {
      icon: /*#__PURE__*/React.createElement(FileSpreadsheet, {
        className: "w-3.5 h-3.5"
      }),
      t: 'นำเข้ารายวิชาจาก CSV',
      c: '#2A4A8C'
    }, {
      icon: /*#__PURE__*/React.createElement(Save, {
        className: "w-3.5 h-3.5"
      }),
      t: 'บันทึกอัตโนมัติทุกการแก้ไข',
      c: 'var(--ok)'
    }].map((f, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "feature-pill"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: f.c
      }
    }, f.icon), f.t)))), alertDialog.isOpen && /*#__PURE__*/React.createElement("div", {
      className: "ov",
      onClick: () => setAlertDialog({
        isOpen: false,
        message: ''
      })
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal",
      style: {
        maxWidth: 380
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-body",
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        lineHeight: 1.6,
        color: 'var(--ink)',
        whiteSpace: 'pre-line',
        margin: '4px 0 16px'
      }
    }, alertDialog.message), /*#__PURE__*/React.createElement("button", {
      onClick: () => setAlertDialog({
        isOpen: false,
        message: ''
      }),
      className: "btn btn-primary",
      style: {
        width: '100%'
      }
    }, "ตกลง")))), confirmDialog.isOpen && /*#__PURE__*/React.createElement("div", {
      className: "ov"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal",
      style: {
        maxWidth: 400
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-title",
      style: {
        marginBottom: 8
      }
    }, confirmDialog.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.65,
        color: 'var(--ink-3)',
        whiteSpace: 'pre-line',
        margin: 0
      }
    }, confirmDialog.message)), /*#__PURE__*/React.createElement("div", {
      className: "modal-foot",
      style: {
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setConfirmDialog(prev => ({
        ...prev,
        isOpen: false
      })),
      className: "btn"
    }, confirmDialog.cancelText), /*#__PURE__*/React.createElement("button", {
      onClick: executeConfirm,
      className: `btn ${confirmDialog.isDestructive ? 'btn-danger' : 'btn-accent'}`
    }, confirmDialog.confirmText)))));
  }

  // ==========================================
  // 12. หน้าตัวอย่าง PDF
  // ==========================================
  if (printMode !== 'none') {
    const modeLabel = printMode === 'current' ? `ตารางเรียน ${activeClassObj.name}` : printMode === 'teacher_current' ? `ตารางสอน ${activeTeacherObj?.name || ''}` : printMode === 'all' ? 'ตารางเรียนทุกห้อง' : printMode === 'room_current' ? `ตารางการใช้ห้อง ${activeRoomObj?.name || ''}` : printMode === 'room_all' ? 'ตารางการใช้ห้องทุกห้อง' : 'ตารางสอนครูทุกคน';
    const pageCount = printMode === 'all' ? deptClasses.length : printMode === 'teacher_all' ? teachers.length : printMode === 'room_all' ? deptRooms.length : 1;
    return /*#__PURE__*/React.createElement("div", {
      className: "tt",
      style: {
        padding: '0 0 40px'
      }
    }, /*#__PURE__*/React.createElement("style", null, styles), /*#__PURE__*/React.createElement("div", {
      className: "rail no-print",
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 40,
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 14,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow",
      style: {
        color: 'rgba(255,255,255,.5)'
      }
    }, "ตัวอย่างก่อนพิมพ์ · A4 แนวนอน · ", /*#__PURE__*/React.createElement("span", {
      className: "mono"
    }, pageCount), " หน้า"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 19,
        fontWeight: 700,
        marginTop: 2
      }
    }, modeLabel)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: printNow,
      className: "btn btn-accent",
      title: "เปิดแท็บใหม่แล้วเด้งหน้าต่างพิมพ์ให้อัตโนมัติ"
    }, /*#__PURE__*/React.createElement(Printer, {
      className: "w-4 h-4"
    }), " เปิดหน้าต่างพิมพ์"), /*#__PURE__*/React.createElement("button", {
      onClick: downloadPrintFile,
      className: "btn",
      title: "ดาวน์โหลดไฟล์ไว้พิมพ์ทีหลัง หรือใช้เมื่อเปิดแท็บใหม่ไม่ได้"
    }, /*#__PURE__*/React.createElement(Download, {
      className: "w-4 h-4"
    }), " ดาวน์โหลดไฟล์"), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setPdfError('');
        setPrintMode('none');
      },
      className: "btn"
    }, /*#__PURE__*/React.createElement(X, {
      className: "w-4 h-4"
    }), " กลับไปแก้ตาราง"))), /*#__PURE__*/React.createElement("div", {
      className: "no-print",
      style: {
        padding: '12px 16px 0',
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: PAGE_W,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, pdfError && /*#__PURE__*/React.createElement("div", {
      className: "note note-err",
      style: {
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(AlertCircle, {
      className: "w-4 h-4",
      style: {
        flexShrink: 0,
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("span", null, pdfError))), /*#__PURE__*/React.createElement("div", {
      className: "note note-info"
    }, /*#__PURE__*/React.createElement(Printer, {
      className: "w-4 h-4",
      style: {
        flexShrink: 0,
        marginTop: 1,
        color: 'var(--accent)'
      }
    }), /*#__PURE__*/React.createElement("div", null, "ในหน้าต่างพิมพ์ ให้เลือกปลายทางเป็น ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--ink)'
      }
    }, "บันทึกเป็น PDF"), " · กระดาษ ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--ink)'
      }
    }, "A4 แนวนอน"), " · ขอบกระดาษ ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--ink)'
      }
    }, "ไม่มี"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4
      }
    }, "ถ้ากดสั่งพิมพ์แล้วไม่มีอะไรขึ้น (เกิดได้เมื่อเปิดจากลิงก์ที่แชร์) ให้ใช้ปุ่ม", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--ink)'
      }
    }, " ดาวน์โหลดไฟล์สำหรับพิมพ์ "), "แล้วเปิดไฟล์ที่ได้ ระบบจะเด้งหน้าต่างพิมพ์ให้เอง"))))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '28px 16px 0',
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      id: "pdf-render-area",
      style: {
        width: 1122,
        background: '#fff'
      }
    }, printMode === 'current' ? renderPrintablePage(activeClassObj, 0, 1) : printMode === 'teacher_current' ? renderTeacherPrintablePage(activeTeacherObj, 0, 1) : printMode === 'teacher_all' ? teachers.map((t, i) => renderTeacherPrintablePage(t, i, teachers.length)) : printMode === 'room_current' ? renderRoomPrintablePage(activeRoomObj, 0, 1) : printMode === 'room_all' ? deptRooms.map((r, i) => renderRoomPrintablePage(r, i, deptRooms.length)) : deptClasses.map((c, i) => renderPrintablePage(c, i, deptClasses.length)))), alertDialog.isOpen && /*#__PURE__*/React.createElement("div", {
      className: "ov",
      onClick: () => setAlertDialog({
        isOpen: false,
        message: ''
      })
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal",
      style: {
        maxWidth: 380
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-body",
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        lineHeight: 1.6,
        whiteSpace: 'pre-line',
        margin: '4px 0 16px'
      }
    }, alertDialog.message), /*#__PURE__*/React.createElement("button", {
      onClick: () => setAlertDialog({
        isOpen: false,
        message: ''
      }),
      className: "btn btn-primary",
      style: {
        width: '100%'
      }
    }, "ตกลง")))));
  }

  // ==========================================
  // 13. หน้าจัดตารางหลัก
  // ==========================================
  const currentSubjectsList = classSubjects[currentClass] || [];
  return /*#__PURE__*/React.createElement("div", {
    className: "tt",
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("style", null, styles), /*#__PURE__*/React.createElement("div", {
    className: "rail",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 14px',
      height: 54,
      flexShrink: 0,
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep('home'),
    className: "brand",
    title: "กลับหน้าแรก"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      background: 'var(--accent)',
      borderRadius: 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Calendar, {
    className: "w-3.5 h-3.5",
    style: {
      color: '#fff'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18.5,
      fontWeight: 700,
      whiteSpace: 'nowrap'
    }
  }, "จัดตาราง")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsTermModalOpen(true),
    className: "chip chip-dark chip-btn",
    style: {
      flexShrink: 0
    },
    title: "เปลี่ยนปีการศึกษาและภาคเรียน"
  }, config.year, " · ภาค ", config.term, /*#__PURE__*/React.createElement(ChevronDown, {
    className: "w-3 h-3",
    style: {
      opacity: .7
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 8
    }
  }), saveStatus === 'saving' && /*#__PURE__*/React.createElement("span", {
    className: "chip chip-dark",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Loader2, {
    className: "w-3 h-3 animate-spin"
  }), " บันทึก…"), saveStatus === 'saved' && /*#__PURE__*/React.createElement("span", {
    className: "chip",
    style: {
      background: 'rgba(21,121,90,.22)',
      color: '#8FE3C4',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Check, {
    className: "w-3 h-3"
  }), " บันทึก ", lastSavedTime), saveStatus === 'error' && /*#__PURE__*/React.createElement("span", {
    className: "chip",
    style: {
      background: 'rgba(184,31,45,.25)',
      color: '#FFB4BB',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(AlertCircle, {
    className: "w-3 h-3"
  }), " บันทึกไม่สำเร็จ"), /*#__PURE__*/React.createElement("div", {
    className: "rail-sep",
    style: {
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement(Segmented, {
    value: viewMode,
    onChange: setViewMode,
    options: [{
      value: 'student',
      label: 'ตารางเรียน',
      icon: /*#__PURE__*/React.createElement(Users, {
        className: "w-3.5 h-3.5"
      })
    }, {
      value: 'teacher',
      label: 'ตารางสอน',
      icon: /*#__PURE__*/React.createElement(User, {
        className: "w-3.5 h-3.5"
      })
    }, {
      value: 'room',
      label: 'ตารางห้อง',
      icon: /*#__PURE__*/React.createElement(DoorOpen, {
        className: "w-3.5 h-3.5"
      })
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "rail-sep",
    style: {
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleUndo,
    disabled: history.length === 0,
    className: "rail-btn",
    title: history.length === 0 ? 'ยังไม่มีการแก้ไขให้ย้อนกลับ' : `ย้อนกลับการแก้ไขล่าสุด (ย้อนได้อีก ${history.length} ครั้ง) · Ctrl+Z`
  }, /*#__PURE__*/React.createElement(Undo2, {
    className: "w-3.5 h-3.5"
  }), " ", /*#__PURE__*/React.createElement("span", null, "ย้อนกลับ", history.length > 0 ? ` ${history.length}` : '')), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsSubjectModalOpen(true),
    className: "rail-btn",
    title: "จัดการรายวิชาของห้องนี้"
  }, /*#__PURE__*/React.createElement(BookOpen, {
    className: "w-3.5 h-3.5"
  }), " ", /*#__PURE__*/React.createElement("span", null, "รายวิชา")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsTeacherModalOpen(true),
    className: "rail-btn",
    title: "จัดการรายชื่อครูผู้สอน"
  }, /*#__PURE__*/React.createElement(User, {
    className: "w-3.5 h-3.5"
  }), " ", /*#__PURE__*/React.createElement("span", null, "ครูผู้สอน")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsRoomModalOpen(true),
    className: "rail-btn",
    title: "ทะเบียนห้องเรียนและห้องปฏิบัติการ"
  }, /*#__PURE__*/React.createElement(DoorOpen, {
    className: "w-3.5 h-3.5"
  }), " ", /*#__PURE__*/React.createElement("span", null, "ห้อง")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setAuditResult(auditSchedule()),
    className: "rail-btn",
    title: "สแกนทั้งตารางหาครูชน ห้องชน และวิชาที่ลงไม่ครบ"
  }, /*#__PURE__*/React.createElement(ShieldCheck, {
    className: "w-3.5 h-3.5"
  }), " ", /*#__PURE__*/React.createElement("span", null, "ตรวจตาราง")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsDataModalOpen(true),
    className: "rail-btn",
    title: "พิมพ์ตาราง สำรองข้อมูล และล้างข้อมูล"
  }, /*#__PURE__*/React.createElement(Printer, {
    className: "w-3.5 h-3.5"
  }), " ", /*#__PURE__*/React.createElement("span", null, "พิมพ์ / ข้อมูล")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPanelOpen(!panelOpen),
    className: "rail-btn",
    title: panelOpen ? 'ซ่อนแผงสรุป' : 'แสดงแผงสรุป'
  }, panelOpen ? /*#__PURE__*/React.createElement(PanelRightClose, {
    className: "w-3.5 h-3.5"
  }) : /*#__PURE__*/React.createElement(PanelRightOpen, {
    className: "w-3.5 h-3.5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "rail-sep",
    style: {
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep('home'),
    className: "rail-btn",
    title: "กลับหน้าแรก"
  }, /*#__PURE__*/React.createElement("span", null, "หน้าแรก"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "context-bar"
  }, viewMode === 'student' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "กำลังจัดตารางเรียนของ"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21.5,
      fontWeight: 800,
      letterSpacing: '-.2px',
      marginTop: 2
    }
  }, activeClassObj.name || '—')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, "ระดับ ", /*#__PURE__*/React.createElement("b", null, activeClassObj.level || '-', " ", activeClassObj.year || '', "/", activeClassObj.room || '')), activeClassObj.major && /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, "สาขา ", /*#__PURE__*/React.createElement("b", null, activeClassObj.major)), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, "นักเรียน ", /*#__PURE__*/React.createElement("b", {
    className: "mono"
  }, activeClassObj.studentCount || '-'), " คน"), /*#__PURE__*/React.createElement("div", {
    className: "meta meta-opt"
  }, "ที่ปรึกษา ", /*#__PURE__*/React.createElement("b", null, activeClassObj.advisor || '-')), /*#__PURE__*/React.createElement("div", {
    className: "meta meta-opt"
  }, "พักคาบ ", /*#__PURE__*/React.createElement("b", {
    className: "mono"
  }, activeLunchPeriod)), classProgress && classProgress.required > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      paddingLeft: 16,
      borderLeft: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "จัดแล้ว"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 20,
      fontWeight: 600,
      marginTop: 1,
      color: classProgress.placed >= classProgress.required ? 'var(--ok)' : 'var(--accent)'
    }
  }, classProgress.placed, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)',
      fontSize: 16
    }
  }, "/", classProgress.required)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsClassModalOpen(true),
    className: "btn btn-sm"
  }, /*#__PURE__*/React.createElement(Settings, {
    className: "w-3.5 h-3.5"
  }), " ตั้งค่าห้อง"))) : viewMode === 'teacher' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "กำลังดูตารางสอนของ"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21.5,
      fontWeight: 800,
      letterSpacing: '-.2px',
      marginTop: 2
    }
  }, activeTeacherObj.name || 'ยังไม่มีครูในระบบ')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, "ห้องประจำ ", /*#__PURE__*/React.createElement("b", {
    className: "mono"
  }, roomLabel(activeTeacherObj.roomId) || '-')), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 16,
      borderLeft: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "ภาระสอน"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 20,
      fontWeight: 600,
      marginTop: 1,
      color: 'var(--accent)'
    }
  }, sumHours, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--ink-3)'
    }
  }, "คาบ/สัปดาห์"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsTeacherModalOpen(true),
    className: "btn btn-sm"
  }, /*#__PURE__*/React.createElement(Settings, {
    className: "w-3.5 h-3.5"
  }), " ตั้งค่าครู"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "กำลังดูตารางการใช้ห้อง"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21.5,
      fontWeight: 800,
      letterSpacing: '-.2px',
      marginTop: 2
    }
  }, activeRoomObj.name || 'ยังไม่มีห้องในทะเบียน')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, activeRoomObj.note && /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, activeRoomObj.note), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 16,
      borderLeft: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "ถูกใช้"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 20,
      fontWeight: 600,
      marginTop: 1,
      color: 'var(--accent)'
    }
  }, sumHours, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--ink-3)'
    }
  }, "จาก ", DAYS.length * 11, " คาบ"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "ว่าง"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 20,
      fontWeight: 600,
      marginTop: 1,
      color: 'var(--ok)'
    }
  }, DAYS.length * 11 - sumHours)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsRoomModalOpen(true),
    className: "btn btn-sm"
  }, /*#__PURE__*/React.createElement(Settings, {
    className: "w-3.5 h-3.5"
  }), " ทะเบียนห้อง")))), /*#__PURE__*/React.createElement("div", {
    className: "grid-wrap",
    ref: gridRef,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "grid-tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "day-cell",
    style: {
      borderBottom: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      fontSize: 12
    }
  }, "วัน \\ คาบ")), PERIODS.map(p => {
    const isLunch = viewMode === 'student' && p.id === activeLunchPeriod;
    if (isLunch) return /*#__PURE__*/React.createElement("th", {
      key: p.id,
      style: {
        width: 42
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-num",
      style: {
        fontSize: 11,
        color: 'var(--ink-3)'
      }
    }, "พัก"));
    return /*#__PURE__*/React.createElement("th", {
      key: p.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-num mono"
    }, p.id), /*#__PURE__*/React.createElement("div", {
      className: "p-time mono"
    }, p.start, /*#__PURE__*/React.createElement("br", null), p.end));
  }))), /*#__PURE__*/React.createElement("tbody", null, DAYS.map((day, dayIndex) => /*#__PURE__*/React.createElement("tr", {
    key: day
  }, /*#__PURE__*/React.createElement("td", {
    className: "day-cell"
  }, day), PERIODS.map(period => {
    if (viewMode === 'student' && period.id === activeLunchPeriod) {
      if (dayIndex === 0) {
        return /*#__PURE__*/React.createElement("td", {
          key: `lunch-${period.id}`,
          rowSpan: 5,
          className: "lunch-td"
        }, /*#__PURE__*/React.createElement("div", {
          className: "lunch-label"
        }, "พักกลางวัน"));
      }
      return null;
    }
    let slots = [];
    let totalStudents = 0;
    if (viewMode === 'student') {
      const s = getSlotData(currentClass, day, period.id);
      if (s) slots.push(s);
    } else {
      slots = viewMode === 'teacher' ? getSlotsForTeacher(currentTeacherTab, day, period.id) : getSlotsForRoom(currentRoomTab, day, period.id);
      totalStudents = slots.reduce((sum, slot) => {
        const cInfo = classes.find(c => c.id === slot.classId);
        return sum + (parseInt(cInfo?.studentCount, 10) || 0);
      }, 0);
    }
    if (viewMode === 'student' && slots[0]?.isFixed) {
      return /*#__PURE__*/React.createElement("td", {
        key: period.id,
        className: "slot-td filled",
        "data-drop-cell": true,
        "data-day": day,
        "data-period": period.id,
        onClick: () => {
          if (suppressClickRef.current) return;
          handleCellClick(day, period.id);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "card-fixed card-drag",
        "data-cardkey": `${currentClass}|${day}|${period.id}`,
        onPointerDown: e => onCardPointerDown(e, currentClass, day, period.id),
        title: "ลากเพื่อย้ายคาบ · คลิกเพื่อแก้ไข"
      }, /*#__PURE__*/React.createElement("span", null, slots[0].label), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 10,
          fontWeight: 600,
          color: 'var(--ink-3)'
        }
      }, "คาบตายตัว")));
    }
    return /*#__PURE__*/React.createElement("td", {
      key: period.id,
      className: `slot-td ${slots.length ? 'filled' : 'empty'}`,
      "data-drop-cell": true,
      "data-day": day,
      "data-period": period.id,
      onClick: () => {
        if (suppressClickRef.current) return;
        handleCellClick(day, period.id);
      }
    }, slots.length > 0 ? slots.map((slotData, idx) => {
      const subjectInfo = slotSubjectInfo(slotData);
      const teacherInfo = !slotData.isManualTeacher ? teachers.find(t => t.id === slotData.teacherId) : null;
      const classInfo = classes.find(c => c.id === slotData.classId);
      const displayRoom = slotRoomText(slotData) || (viewMode === 'teacher' ? roomLabel(activeTeacherObj?.roomId) : '');
      const displayTeacherName = slotData.isManualTeacher ? slotData.teacherName : teacherInfo?.name;
      const pal = subjectInfo ? subjectInfo.pal : SUBJECT_COLORS[0];
      const many = slots.length > 1;
      return /*#__PURE__*/React.createElement("div", {
        key: idx,
        className: "card card-drag",
        "data-cardkey": `${slotData.classId}|${day}|${period.id}`,
        onPointerDown: e => onCardPointerDown(e, slotData.classId, day, period.id),
        title: subjectInfo?.external ? 'วิชานอกแผนก · ลากเพื่อย้ายคาบ · คลิกเพื่อแก้ไข' : 'ลากเพื่อย้ายคาบ · คลิกเพื่อแก้ไข',
        style: {
          background: pal.bg,
          borderLeftColor: pal.line,
          color: pal.text,
          minHeight: many ? 34 : 70
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "card-top mono"
      }, /*#__PURE__*/React.createElement("span", null, viewMode === 'teacher' && totalStudents > 0 ? `นร.${totalStudents}` : subjectInfo?.code || ''), /*#__PURE__*/React.createElement("span", null, displayRoom || '')), /*#__PURE__*/React.createElement("div", {
        className: "card-name",
        style: {
          fontSize: many ? 10.5 : 11.5,
          margin: many ? '1px 0' : '3px 0'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          WebkitLineClamp: many ? 1 : 3
        }
      }, subjectInfo?.name || '—')), /*#__PURE__*/React.createElement("div", {
        className: "card-foot"
      }, viewMode === 'student' ? getFirstName(displayTeacherName) : viewMode === 'teacher' ? classInfo?.name : `${classInfo?.name || ''}${displayTeacherName ? ` · ${getFirstName(displayTeacherName)}` : ''}`));
    }) : /*#__PURE__*/React.createElement("div", {
      className: "slot-empty"
    }, /*#__PURE__*/React.createElement(Plus, {
      className: "w-3 h-3"
    }), " วางคาบ"));
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "sheet-bar",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-scroll"
  }, viewMode === 'student' ? renderTabs(classes, currentClass, setCurrentClass, setClasses, 'var(--accent)', item => {
    setCurrentClass(item.id);
    setIsClassModalOpen(true);
  }) : viewMode === 'teacher' ? renderTabs(teachers, currentTeacherTab, setCurrentTeacherTab, setTeachers, 'var(--accent)') : renderTabs(deptRooms, currentRoomTab, setCurrentRoomTab, setRooms, 'var(--accent)'), /*#__PURE__*/React.createElement("button", {
    onClick: viewMode === 'student' ? handleQuickAddClass : viewMode === 'teacher' ? handleQuickAddTeacher : () => setIsRoomModalOpen(true),
    className: "sheet-add",
    title: viewMode === 'student' ? 'เพิ่มห้องเรียนใหม่' : viewMode === 'teacher' ? 'เพิ่มครูผู้สอนใหม่' : 'เพิ่มห้องในทะเบียน'
  }, /*#__PURE__*/React.createElement(Plus, {
    className: "w-4 h-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sheet-hint",
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 14px',
      fontSize: 15,
      color: 'var(--ink-3)',
      borderLeft: '1px solid var(--rule-soft)',
      whiteSpace: 'nowrap'
    }
  }, "ลากการ์ดเพื่อย้ายคาบ · ดับเบิลคลิกแท็บเพื่อตั้งค่า"))), panelOpen && /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, viewMode === 'student' ? 'โครงสร้างรายวิชา' : viewMode === 'teacher' ? 'ภาระงานสอน' : 'การใช้ห้อง'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17.5,
      fontWeight: 700,
      marginTop: 2
    }
  }, viewMode === 'student' ? activeClassObj.name || '—' : viewMode === 'teacher' ? activeTeacherObj.name || '—' : activeRoomObj.name || '—')), viewMode === 'student' && /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsSubjectModalOpen(true),
    className: "btn btn-sm"
  }, /*#__PURE__*/React.createElement(Edit2, {
    className: "w-3 h-3"
  }), " แก้รายวิชา")), viewMode === 'student' && /*#__PURE__*/React.createElement("div", {
    className: "hint",
    style: {
      marginTop: 9,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tick tick-on"
  }), " จัดแล้ว", /*#__PURE__*/React.createElement("span", {
    className: "tick",
    style: {
      marginLeft: 4
    }
  }), " ยังไม่จัด", /*#__PURE__*/React.createElement("span", {
    className: "tick tick-over",
    style: {
      marginLeft: 4
    }
  }), " เกินหลักสูตร")), /*#__PURE__*/React.createElement("div", {
    className: "panel-body"
  }, sidebarSummary.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 20px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5,
      color: 'var(--ink-3)',
      lineHeight: 1.6,
      margin: '0 0 14px'
    }
  }, viewMode === 'student' ? 'ห้องนี้ยังไม่มีรายวิชา ลงรายวิชาก่อนจึงจะเริ่มวางคาบได้' : viewMode === 'teacher' ? 'ครูท่านนี้ยังไม่มีคาบสอน คลิกช่องในตารางเพื่อเพิ่มคาบ' : rooms.length === 0 ? 'ยังไม่มีห้องในทะเบียน เพิ่มห้องก่อนจึงจะดูตารางการใช้ห้องได้' : 'ห้องนี้ยังว่างทั้งสัปดาห์ ยังไม่มีคาบใดใช้ห้องนี้'), viewMode === 'student' && /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsSubjectModalOpen(true),
    className: "btn btn-accent btn-sm"
  }, /*#__PURE__*/React.createElement(Plus, {
    className: "w-3.5 h-3.5"
  }), " ลงรายวิชา")) : /*#__PURE__*/React.createElement("table", {
    className: "sum-tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "l"
  }, "รายวิชา"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 34
    }
  }, "ท"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 34
    }
  }, "ป"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 34
    }
  }, "น"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 62
    }
  }, "คาบ"))), /*#__PURE__*/React.createElement("tbody", null, sidebarSummary.map((s, idx) => {
    const req = Number(s.theory) + Number(s.practical);
    const placed = viewMode === 'student' ? placedHoursFor(currentClass, s.id) : s.hours;
    const pal = normalizeSubjectColor(s, idx);
    return /*#__PURE__*/React.createElement("tr", {
      key: s.id || idx,
      className: "sum-row"
    }, /*#__PURE__*/React.createElement("td", {
      className: "l"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "swatch",
      style: {
        background: pal.line,
        marginTop: 4
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sum-code mono"
    }, viewMode === 'room' ? s.className || '—' : s.code || '—'), /*#__PURE__*/React.createElement("div", {
      className: "sum-name"
    }, s.name), viewMode === 'student' && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 5
      }
    }, /*#__PURE__*/React.createElement(TickRail, {
      required: req,
      placed: placed
    }))))), /*#__PURE__*/React.createElement("td", {
      className: "mono"
    }, s.theory), /*#__PURE__*/React.createElement("td", {
      className: "mono"
    }, s.practical), /*#__PURE__*/React.createElement("td", {
      className: "mono"
    }, s.credit), /*#__PURE__*/React.createElement("td", {
      className: "mono",
      style: {
        fontWeight: 600,
        color: viewMode === 'student' ? placed >= req ? 'var(--ok)' : placed > 0 ? 'var(--warn)' : 'var(--danger)' : 'var(--ink)'
      }
    }, viewMode === 'student' ? `${placed}/${req}` : placed));
  })), /*#__PURE__*/React.createElement("tfoot", null, /*#__PURE__*/React.createElement("tr", {
    className: "sum-foot"
  }, /*#__PURE__*/React.createElement("td", {
    className: "l",
    style: {
      fontSize: 15.5,
      color: 'var(--ink-3)'
    }
  }, "รวม ", sidebarSummary.length, " รายวิชา"), /*#__PURE__*/React.createElement("td", {
    className: "mono"
  }, sumTheory), /*#__PURE__*/React.createElement("td", {
    className: "mono"
  }, sumPractical), /*#__PURE__*/React.createElement("td", {
    className: "mono"
  }, sumCredit), /*#__PURE__*/React.createElement("td", {
    className: "mono",
    style: {
      color: 'var(--accent)'
    }
  }, sumHours))))))), toast && /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "toast-title"
  }, toast.verb || 'ย้าย', " ", toast.name, " แล้ว"), /*#__PURE__*/React.createElement("div", {
    className: "toast-detail"
  }, toast.className, " ", toast.verb === 'ลบ' ? '·' : '→', " ", toast.where, toast.len > 1 ? ` (${toast.len} คาบ)` : ''), toast.stat && /*#__PURE__*/React.createElement("div", {
    className: `toast-stat ${toast.stat.remain === 0 ? 'toast-done' : 'toast-left'}`
  }, toast.stat.remain === 0 ? `ลงครบแล้ว ${toast.stat.required} คาบ` : `ลงแล้ว ${toast.stat.placed} จาก ${toast.stat.required} คาบ · เหลืออีก ${toast.stat.remain} คาบ`)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "toast-btn",
    onClick: () => {
      handleUndo();
      dismissToast();
    },
    title: "ย้อนกลับการย้ายครั้งนี้"
  }, /*#__PURE__*/React.createElement(Undo2, {
    className: "w-3.5 h-3.5"
  }), " ย้อนกลับ"), /*#__PURE__*/React.createElement("button", {
    className: "toast-btn",
    onClick: dismissToast,
    style: {
      justifyContent: 'center'
    },
    title: "ปิดแถบนี้"
  }, "ตกลง")), /*#__PURE__*/React.createElement("div", {
    className: "toast-bar"
  })), /*#__PURE__*/React.createElement("div", {
    ref: ghostRef,
    className: "drag-ghost",
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ghostNameRef,
    className: "ghost-name"
  }), /*#__PURE__*/React.createElement("div", {
    ref: ghostSubRef,
    className: "ghost-sub"
  }), /*#__PURE__*/React.createElement("div", {
    ref: ghostWhyRef,
    className: "ghost-why"
  })), editingSlot && /*#__PURE__*/React.createElement("div", {
    className: "ov",
    onClick: () => setEditingSlot(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      maxWidth: 470
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "modal-title"
  }, "วางคาบเรียน"), /*#__PURE__*/React.createElement("div", {
    className: "modal-sub mono"
  }, editingSlot.day, " · คาบ ", editingSlot.period, " · ", PERIODS[editingSlot.period - 1]?.rawTime)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setEditingSlot(null),
    className: "x-btn"
  }, /*#__PURE__*/React.createElement(X, {
    className: "w-4 h-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, errorMsg && /*#__PURE__*/React.createElement("div", {
    className: "note note-err"
  }, /*#__PURE__*/React.createElement(AlertCircle, {
    className: "w-4 h-4",
    style: {
      flexShrink: 0,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", null, errorMsg)), viewMode !== 'student' && /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 5,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl",
    style: {
      marginBottom: 0
    }
  }, "ห้องเรียนที่จะสอน"), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: isManualClass,
    onChange: e => {
      const checked = e.target.checked;
      setIsManualClass(checked);
      setSelectedSubject('');
      setSelectedDuration(1);
      if (checked) {
        setModalClassId('');
        setIsManualSubject(false);
        setManualSubjectName('');
      } else {
        setManualClassName('');
        setExtSubjectForm({
          code: '',
          name: '',
          theory: 0,
          practical: 0,
          credit: 0
        });
      }
    }
  }), "กลุ่มนอกแผนก (พิมพ์เอง)")), isManualClass ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    list: "ext-class-suggest",
    type: "text",
    value: manualClassName,
    onChange: e => setManualClassName(e.target.value),
    className: "inp",
    placeholder: "เช่น บัญชี ปวช. 2/1 (นักเรียนแผนกอื่น)"
  }), /*#__PURE__*/React.createElement("datalist", {
    id: "ext-class-suggest"
  }, classes.filter(c => c.external).map(c => /*#__PURE__*/React.createElement("option", {
    key: c.id,
    value: c.name
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hint"
  }, "พิมพ์ชื่อกลุ่มที่เคยใช้ซ้ำได้ ระบบจะจำไว้ให้เลือกจากรายการอัตโนมัติ ไม่ปนกับห้องเรียนของแผนก")) : /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: modalClassId,
    onChange: e => {
      setModalClassId(e.target.value);
      setSelectedSubject('');
      setSelectedDuration(1);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "เลือกห้องเรียน"), deptClasses.map(c => /*#__PURE__*/React.createElement("option", {
    key: c.id,
    value: c.id
  }, c.name)))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, isManualClass ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "รายวิชา (นอกแผนก)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: extSubjectForm.code,
    onChange: e => setExtSubjectForm({
      ...extSubjectForm,
      code: e.target.value
    }),
    className: "inp mono",
    placeholder: "รหัสวิชา"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: extSubjectForm.name,
    onChange: e => setExtSubjectForm({
      ...extSubjectForm,
      name: e.target.value
    }),
    className: "inp",
    placeholder: "ชื่อวิชา"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8
    }
  }, [['ท', 'theory'], ['ป', 'practical'], ['น', 'credit']].map(([lab, key]) => /*#__PURE__*/React.createElement("div", {
    key: key
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl",
    style: {
      fontSize: 10.5
    }
  }, lab), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "0",
    value: extSubjectForm[key],
    onChange: e => setExtSubjectForm({
      ...extSubjectForm,
      [key]: e.target.value
    }),
    className: "inp inp-num mono"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "hint"
  }, "วิชานี้จะถูกจำไว้เฉพาะของกลุ่มนอกแผนกนี้ ไม่ปนกับรายวิชาของห้องเรียนในแผนก")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 5,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl",
    style: {
      marginBottom: 0
    }
  }, "รายวิชา"), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: isManualSubject,
    onChange: e => {
      const checked = e.target.checked;
      setIsManualSubject(checked);
      if (checked) {
        setSelectedSubject('');
        setSelectedDuration(1);
      } else setManualSubjectName('');
    }
  }), "วิชานอกแผนก (พิมพ์เอง)")), isManualSubject ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: manualSubjectName,
    onChange: e => setManualSubjectName(e.target.value),
    className: "inp",
    placeholder: "เช่น วิชาจากแผนกอื่นที่มาสอนห้องนี้"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hint"
  }, "วิชานี้จะไม่ถูกนำไปนับรวมกับโครงสร้างรายวิชาของห้อง (ท./ป./น./ความครบของหลักสูตร) — ใช้สำหรับวิชาที่มาสอนนอกแผนกเป็นครั้งคราวเท่านั้น")) : /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: selectedSubject,
    disabled: viewMode !== 'student' && !modalClassId,
    onChange: e => {
      const subId = e.target.value;
      setSelectedSubject(subId);
      const cls = modalClassId || currentClass;
      const info = (classSubjects[cls] || []).find(s => s.id === subId);
      if (info) {
        const isAct = Number(info.theory) === 0 && Number(info.practical) === 2 && Number(info.credit) === 0;
        setSelectedDuration(isAct ? 2 : 1);
      } else setSelectedDuration(1);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "เลือกรายวิชา"), (classSubjects[modalClassId || currentClass] || []).map(s => {
    const req = Number(s.theory) + Number(s.practical);
    const done = placedHoursFor(modalClassId || currentClass, s.id);
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.id
    }, s.code ? `${s.code} · ` : '', s.name, " — จัดแล้ว ", done, "/", req, " คาบ");
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "จำนวนคาบติดกัน"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "1",
    max: maxDuration,
    value: selectedDuration,
    disabled: !isManualClass && !isManualSubject && !selectedSubject,
    className: "inp inp-num mono",
    onChange: e => {
      let v = parseInt(e.target.value);
      if (isNaN(v) || v < 1) v = 1;
      if (v > maxDuration) v = maxDuration;
      setSelectedDuration(v);
    }
  }), isManualClass ? /*#__PURE__*/React.createElement("div", {
    className: "hint"
  }, extManualHours > 0 ? `ตามที่กรอกไว้ (ท+ป) สูงสุด ${maxDuration} คาบ` : `ยังไม่ได้กรอกชั่วโมง ตั้งได้อิสระสูงสุด ${maxDuration} คาบ`) : isManualSubject ? /*#__PURE__*/React.createElement("div", {
    className: "hint"
  }, "วิชานอกแผนกไม่มีจำนวนคาบตามหลักสูตร ตั้งได้อิสระสูงสุด ", maxDuration, " คาบ") : currentSubjectObj && /*#__PURE__*/React.createElement("div", {
    className: "hint"
  }, "วิชานี้มีทั้งหมด ", maxDuration, " คาบต่อสัปดาห์")), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 5,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl",
    style: {
      marginBottom: 0
    }
  }, "ห้องที่ใช้สอน"), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-3)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: isManualRoom,
    onChange: e => {
      setIsManualRoom(e.target.checked);
      if (e.target.checked) setCustomRoomId('');else setManualRoomName('');
    }
  }), "ห้องนอกแผนก (พิมพ์เอง)")), isManualRoom ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: manualRoomName,
    onChange: e => setManualRoomName(e.target.value),
    className: "inp",
    placeholder: "เช่น อาคาร 8 ห้อง 838"
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 7,
      marginTop: 8,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: saveRoomToRegistry,
    style: {
      marginTop: 3
    },
    onChange: e => setSaveRoomToRegistry(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-3)',
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink)'
    }
  }, "เก็บเข้าทะเบียนห้อง"), " เพื่อให้ตรวจห้องชนได้ และครั้งหน้าเลือกจากรายการได้เลย", !saveRoomToRegistry && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      color: 'var(--warn)',
      fontWeight: 700,
      marginTop: 3
    }
  }, "ไม่เก็บ = ระบบจะไม่เตือนถ้าห้องนี้ถูกใช้ซ้ำเวลากัน")))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("select", {
    value: customRoomId,
    onChange: e => setCustomRoomId(e.target.value),
    className: "sel"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "ไม่ระบุห้อง"), deptRooms.map(r => /*#__PURE__*/React.createElement("option", {
    key: r.id,
    value: r.id
  }, r.name, r.note ? ` · ${r.note}` : '')), rooms.filter(r => r.external).length > 0 && /*#__PURE__*/React.createElement("optgroup", {
    label: "ห้องนอกแผนก"
  }, rooms.filter(r => r.external).map(r => /*#__PURE__*/React.createElement("option", {
    key: r.id,
    value: r.id
  }, r.name)))), rooms.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "hint"
  }, "ยังไม่มีห้องในทะเบียน", ' ', /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsRoomModalOpen(true),
    style: {
      color: 'var(--accent)',
      fontWeight: 700,
      textDecoration: 'underline',
      textUnderlineOffset: 2
    }
  }, "เพิ่มห้อง"), ' ', "หรือติ๊ก \"ห้องนอกแผนก\" เพื่อพิมพ์เอง")))), (() => {
    if (!editingSlot) return null;
    if (isManualRoom && !saveRoomToRegistry) return null;
    const rid = isManualRoom ? rooms.find(r => r.name.trim().toLowerCase() === manualRoomName.trim().toLowerCase())?.id : customRoomId || (!isManualTeacher ? teachers.find(t => t.id === selectedTeacher)?.roomId : null);
    if (!rid) return null;
    const cls = modalClassId || currentClass;
    const clashes = [];
    let cur = editingSlot.period,
      cnt = 0;
    const cObj2 = classes.find(c => c.id === cls) || {};
    const lunch2 = cObj2.lunchPeriod || 5;
    while (cnt < selectedDuration && cur <= 11) {
      if (cur !== lunch2) {
        const rc = roomClashAt(rid, editingSlot.day, cur, cls);
        if (rc) clashes.push({
          period: cur,
          cls: classes.find(c => c.id === rc.classId)?.name || 'ห้องอื่น'
        });
        cnt++;
      }
      cur++;
    }
    if (clashes.length === 0) {
      return /*#__PURE__*/React.createElement("div", {
        className: "note",
        style: {
          background: 'var(--ok-soft)',
          border: '1px solid #A8D8C4',
          color: '#0E5A42'
        }
      }, /*#__PURE__*/React.createElement(Check, {
        className: "w-4 h-4",
        style: {
          flexShrink: 0,
          marginTop: 1
        }
      }), /*#__PURE__*/React.createElement("span", null, "ห้อง ", roomLabel(rid), " ว่างในช่วงเวลานี้"));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "note note-err"
    }, /*#__PURE__*/React.createElement(AlertCircle, {
      className: "w-4 h-4",
      style: {
        flexShrink: 0,
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("span", null, "ห้อง ", roomLabel(rid), " ไม่ว่าง — ", clashes.map(c => `คาบ ${c.period} ใช้โดย ${c.cls}`).join(' · ')));
  })(), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 5,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl",
    style: {
      marginBottom: 0
    }
  }, "ครูผู้สอน"), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-3)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: isManualTeacher,
    onChange: e => {
      setIsManualTeacher(e.target.checked);
      if (e.target.checked) setSelectedTeacher('');else setManualTeacherName('');
    }
  }), "ครูนอกแผนก (พิมพ์ชื่อเอง)")), isManualTeacher ? /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: manualTeacherName,
    onChange: e => setManualTeacherName(e.target.value),
    className: "inp",
    placeholder: "พิมพ์ชื่อครูผู้สอน"
  }) : /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: selectedTeacher,
    onChange: e => {
      setSelectedTeacher(e.target.value);
      const t = teachers.find(x => x.id === e.target.value);
      setCustomRoomId(t?.roomId || '');
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "เลือกครูผู้สอน"), teachers.map(t => /*#__PURE__*/React.createElement("option", {
    key: t.id,
    value: t.id
  }, t.name, t.roomId ? ` · ห้อง ${roomLabel(t.roomId)}` : '')))), (!isManualTeacher && selectedTeacher || isManualTeacher && manualTeacherName.trim()) && /*#__PURE__*/React.createElement("div", {
    className: "box",
    style: {
      background: 'var(--surface-2)',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 8
    }
  }, "คิวว่างของครูท่านนี้ทั้งสัปดาห์"), /*#__PURE__*/React.createElement("table", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 26
    }
  }), PERIODS.map(p => /*#__PURE__*/React.createElement("th", {
    key: p.id,
    className: "mono"
  }, p.id)))), /*#__PURE__*/React.createElement("tbody", null, DAYS.map(d => {
    let preview = [];
    if (editingSlot && d === editingSlot.day) {
      let cur = editingSlot.period,
        n = 0;
      const cObj = classes.find(c => c.id === activeModalClassId) || {};
      const cLunch = cObj.lunchPeriod || 5;
      while (n < selectedDuration && cur <= 11) {
        if (cur !== cLunch) {
          preview.push(cur);
          n++;
        }
        cur++;
      }
    }
    return /*#__PURE__*/React.createElement("tr", {
      key: d
    }, /*#__PURE__*/React.createElement("th", {
      style: {
        fontSize: 11
      }
    }, DAY_SHORT[d]), PERIODS.map(p => {
      const isPlan = preview.includes(p.id);
      const busy = schedule.find(s => s.day === d && s.period === p.id && (isManualTeacher ? s.isManualTeacher && s.teacherName === manualTeacherName.trim() : !s.isManualTeacher && s.teacherId === selectedTeacher));
      let cls = 'free',
        title = 'ว่าง',
        txt = '';
      if (busy && busy.classId !== activeModalClassId) {
        const bClass = classes.find(c => c.id === busy.classId);
        cls = 'busy';
        title = `ติดสอน ${bClass?.name || ''}`;
        const m = (bClass?.name || '').match(/(ปวช\.|ปวส\.)\s*\d+\/\d+/);
        txt = m ? m[0].replace(/\s/g, '') : (bClass?.name || '').split(' ').slice(-1)[0];
      } else if (busy) {
        cls = 'self';
        title = 'สอนห้องนี้อยู่แล้ว';
      }
      if (isPlan) {
        cls = busy && busy.classId !== activeModalClassId ? 'clash' : 'plan';
        title = cls === 'clash' ? 'ชนกับคาบเดิม' : 'คาบที่กำลังจะวาง';
      }
      return /*#__PURE__*/React.createElement("td", {
        key: p.id,
        className: cls,
        title: title
      }, txt && /*#__PURE__*/React.createElement("div", {
        className: "mini-txt"
      }, txt));
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mini-legend"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: '#fff',
      border: '1px solid var(--rule)'
    }
  }), "ว่าง"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: 'var(--danger)'
    }
  }), "ติดสอน"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: 'var(--accent)'
    }
  }), "กำลังจะวาง"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: '#7E1019'
    }
  }), "ชนกัน"))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 9,
      alignItems: 'flex-start',
      cursor: 'pointer',
      padding: '10px 12px',
      border: '1px solid var(--accent-line)',
      background: 'var(--accent-soft)',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: allowOverlap,
    onChange: e => setAllowOverlap(e.target.checked),
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: '#7A3F07'
    }
  }, "ให้สอนซ้อนเวลาได้"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#96591A',
      lineHeight: 1.5,
      marginTop: 2
    }
  }, "ติ๊กเมื่อครูต้องคุมหลายห้องพร้อมกันจริง ระบบจะข้ามการเตือนคาบชน")))), /*#__PURE__*/React.createElement("div", {
    className: "modal-foot"
  }, deleteInfo ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, deleteInfo.lockWhole ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, deleteInfo.blk.slot.isFixed ? 'คาบตายตัว' : 'วิชากิจกรรม', "ต้องลบทั้ง ", deleteInfo.max, " คาบ") : deleteInfo.max > 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "ลบ"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "1",
    max: deleteInfo.max,
    value: Math.min(deleteCount, deleteInfo.max),
    onChange: e => {
      let v = parseInt(e.target.value);
      if (isNaN(v) || v < 1) v = 1;
      if (v > deleteInfo.max) v = deleteInfo.max;
      setDeleteCount(v);
    },
    className: "inp inp-num",
    style: {
      width: 62,
      padding: '6px 8px',
      fontSize: 15.5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "จาก ", deleteInfo.max, " คาบ (คาบ ", deleteInfo.targets.slice(0, Math.min(deleteCount, deleteInfo.max)).join(', '), ")")) : null, /*#__PURE__*/React.createElement("button", {
    onClick: handleDeleteSlot,
    className: "btn btn-ghost-danger btn-sm"
  }, /*#__PURE__*/React.createElement(Trash2, {
    className: "w-3.5 h-3.5"
  }), deleteInfo.lockWhole ? `ลบ ${deleteInfo.max} คาบ` : deleteInfo.max > 1 ? `ลบ ${Math.min(deleteCount, deleteInfo.max)} คาบ` : 'ลบคาบนี้')) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setEditingSlot(null),
    className: "btn"
  }, "ยกเลิก"), /*#__PURE__*/React.createElement("button", {
    onClick: handleSaveSlot,
    className: "btn btn-accent"
  }, /*#__PURE__*/React.createElement(Check, {
    className: "w-4 h-4"
  }), " วางคาบ"))))), isSubjectModalOpen && /*#__PURE__*/React.createElement("div", {
    className: "ov",
    onClick: () => safeCloseModal(editingSubjectId, () => setIsSubjectModalOpen(false))
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      maxWidth: 620
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "modal-title"
  }, "รายวิชาของ ", activeClassObj.name), /*#__PURE__*/React.createElement("div", {
    className: "modal-sub"
  }, currentSubjectsList.length, " รายวิชา · รวม ", sumHours, " คาบต่อสัปดาห์")), /*#__PURE__*/React.createElement("button", {
    onClick: () => safeCloseModal(editingSubjectId, () => setIsSubjectModalOpen(false)),
    className: "x-btn"
  }, /*#__PURE__*/React.createElement(X, {
    className: "w-4 h-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box-title"
  }, /*#__PURE__*/React.createElement(Copy, {
    className: "w-3.5 h-3.5"
  }), " คัดลอกจากห้องอื่น"), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    style: {
      marginBottom: 8
    },
    value: copySourceClassId,
    onChange: e => setCopySourceClassId(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "เลือกห้องต้นทาง"), classes.filter(c => c.id !== currentClass && (classSubjects[c.id] || []).length > 0).map(c => /*#__PURE__*/React.createElement("option", {
    key: c.id,
    value: c.id
  }, c.name, " (", (classSubjects[c.id] || []).length, " วิชา)"))), /*#__PURE__*/React.createElement("button", {
    onClick: handleCopyPlan,
    disabled: !copySourceClassId,
    className: "btn btn-sm",
    style: {
      width: '100%'
    }
  }, "คัดลอกมาลงห้องนี้")), /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box-title"
  }, /*#__PURE__*/React.createElement(FileSpreadsheet, {
    className: "w-3.5 h-3.5"
  }), " นำเข้าจาก CSV"), /*#__PURE__*/React.createElement("label", {
    className: "btn btn-sm",
    style: {
      width: '100%',
      marginBottom: 8,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Upload, {
    className: "w-3.5 h-3.5"
  }), " เลือกไฟล์ CSV", /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".csv",
    onChange: handleFileUpload,
    style: {
      display: 'none'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: downloadTemplate,
    className: "btn btn-sm",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Download, {
    className: "w-3.5 h-3.5"
  }), " ดาวน์โหลดไฟล์ตัวอย่าง"))), /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box-title"
  }, /*#__PURE__*/React.createElement(Plus, {
    className: "w-3.5 h-3.5"
  }), " เพิ่มรายวิชา"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '150px 1fr',
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "รหัสวิชา"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "inp mono",
    value: newSubjectForm.code,
    placeholder: "20000-1401",
    onChange: e => setNewSubjectForm({
      ...newSubjectForm,
      code: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "ชื่อวิชา"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "inp",
    value: newSubjectForm.name,
    placeholder: "คณิตศาสตร์อุตสาหกรรม",
    onChange: e => setNewSubjectForm({
      ...newSubjectForm,
      name: e.target.value
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "ทฤษฎี"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "0",
    className: "inp inp-num mono",
    value: newSubjectForm.theory,
    onChange: e => setNewSubjectForm({
      ...newSubjectForm,
      theory: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "ปฏิบัติ"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "0",
    className: "inp inp-num mono",
    value: newSubjectForm.practical,
    onChange: e => setNewSubjectForm({
      ...newSubjectForm,
      practical: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "หน่วยกิต"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "0",
    className: "inp inp-num mono",
    value: newSubjectForm.credit,
    onChange: e => setNewSubjectForm({
      ...newSubjectForm,
      credit: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl",
    style: {
      color: 'var(--accent)'
    }
  }, "รวมคาบ"), /*#__PURE__*/React.createElement("div", {
    className: "inp inp-num mono",
    style: {
      background: 'var(--accent-soft)',
      borderColor: 'var(--accent-line)',
      fontWeight: 600
    }
  }, Number(newSubjectForm.theory || 0) + Number(newSubjectForm.practical || 0)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "สีที่จะแสดงในตาราง"), /*#__PURE__*/React.createElement("div", {
    className: "color-row"
  }, SUBJECT_COLORS.map((c, i) => {
    const def = SUBJECT_COLORS[currentSubjectsList.length % SUBJECT_COLORS.length].key;
    const on = (newSubjectForm.colorKey || def) === c.key;
    return /*#__PURE__*/React.createElement("button", {
      key: c.key,
      type: "button",
      title: c.key,
      onClick: () => setNewSubjectForm({
        ...newSubjectForm,
        colorKey: c.key
      }),
      className: `color-dot ${on ? 'color-on' : ''}`,
      style: {
        background: c.bg,
        boxShadow: `inset 0 0 0 2px ${c.line}`
      }
    });
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: handleAddSubject,
    className: "btn btn-primary",
    style: {
      width: '100%'
    }
  }, "เพิ่มรายวิชา")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 4
    }
  }, "รายวิชาในห้องนี้"), currentSubjectsList.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: "hint",
    style: {
      marginBottom: 9
    }
  }, "ลากที่ไอคอน ⠿ ด้านซ้ายของแต่ละวิชาเพื่อจัดลำดับก่อน-หลัง"), currentSubjectsList.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "note note-info",
    style: {
      justifyContent: 'center'
    }
  }, "ยังไม่มีรายวิชา เพิ่มด้านบน คัดลอกจากห้องอื่น หรือนำเข้าจาก CSV") : currentSubjectsList.map((s, idx) => {
    const pal = normalizeSubjectColor(s, idx);
    const req = Number(s.theory) + Number(s.practical);
    const done = placedHoursFor(currentClass, s.id);
    const isEditingThis = editingSubjectId === s.id;
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      className: `list-row ${draggedSubjectId === s.id ? 'list-row-dragging' : ''}`,
      onDragOver: e => {
        if (!draggedSubjectId || draggedSubjectId === s.id || isEditingThis) return;
        e.preventDefault();
        e.currentTarget.classList.add('list-row-dragover');
      },
      onDragLeave: e => e.currentTarget.classList.remove('list-row-dragover'),
      onDrop: e => {
        e.preventDefault();
        e.currentTarget.classList.remove('list-row-dragover');
        if (draggedSubjectId && draggedSubjectId !== s.id) {
          saveHistory();
          reorderSubject(currentClass, draggedSubjectId, s.id);
        }
        setDraggedSubjectId(null);
      }
    }, isEditingThis ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '130px 1fr',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", {
      className: "lbl"
    }, "รหัสวิชา"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "inp mono",
      style: {
        padding: '6px 8px',
        fontSize: 13.5
      },
      value: editSubjectForm.code,
      onChange: e => setEditSubjectForm({
        ...editSubjectForm,
        code: e.target.value
      })
    })), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", {
      className: "lbl"
    }, "ชื่อวิชา"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "inp",
      style: {
        padding: '6px 8px',
        fontSize: 13.5
      },
      value: editSubjectForm.name,
      onChange: e => setEditSubjectForm({
        ...editSubjectForm,
        name: e.target.value
      })
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 8
      }
    }, [['ทฤษฎี', 'theory'], ['ปฏิบัติ', 'practical'], ['หน่วยกิต', 'credit']].map(([lab, key]) => /*#__PURE__*/React.createElement("div", {
      className: "field",
      key: key
    }, /*#__PURE__*/React.createElement("label", {
      className: "lbl"
    }, lab), /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: "0",
      className: "inp inp-num mono",
      style: {
        padding: '6px 8px',
        fontSize: 13.5
      },
      value: editSubjectForm[key],
      onChange: e => setEditSubjectForm({
        ...editSubjectForm,
        [key]: e.target.value
      })
    }))), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", {
      className: "lbl",
      style: {
        color: 'var(--accent)'
      }
    }, "รวม"), /*#__PURE__*/React.createElement("div", {
      className: "inp inp-num mono",
      style: {
        padding: '6px 8px',
        fontSize: 13.5,
        background: 'var(--surface-2)'
      }
    }, Number(editSubjectForm.theory || 0) + Number(editSubjectForm.practical || 0)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "lbl"
    }, "สี"), /*#__PURE__*/React.createElement("div", {
      className: "color-row"
    }, SUBJECT_COLORS.map(c => /*#__PURE__*/React.createElement("button", {
      key: c.key,
      type: "button",
      title: c.key,
      onClick: () => setEditSubjectForm({
        ...editSubjectForm,
        colorKey: c.key
      }),
      className: `color-dot ${editSubjectForm.colorKey === c.key ? 'color-on' : ''}`,
      style: {
        width: 22,
        height: 22,
        background: c.bg,
        boxShadow: `inset 0 0 0 2px ${c.line}`
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 7,
        justifyContent: 'flex-end',
        borderTop: '1px solid var(--rule-soft)',
        paddingTop: 10
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: cancelEditSubject,
      className: "btn btn-sm"
    }, "ยกเลิก"), /*#__PURE__*/React.createElement("button", {
      onClick: () => saveEditSubject(s.id),
      className: "btn btn-accent btn-sm"
    }, /*#__PURE__*/React.createElement(Check, {
      className: "w-3.5 h-3.5"
    }), " บันทึก"))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "drag-handle",
      draggable: true,
      title: "กดค้างแล้วลากเพื่อจัดลำดับ",
      onDragStart: e => {
        setDraggedSubjectId(s.id);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', s.id);
      },
      onDragEnd: () => setDraggedSubjectId(null)
    }, /*#__PURE__*/React.createElement(GripVertical, {
      className: "w-4 h-4"
    })), /*#__PURE__*/React.createElement("span", {
      className: "swatch",
      style: {
        background: pal.line,
        width: 4,
        height: 34,
        borderRadius: 2
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 14.5,
        color: 'var(--ink-3)'
      }
    }, s.code || '—'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17.5,
        fontWeight: 600,
        lineHeight: 1.3
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 14.5,
        color: 'var(--ink-3)'
      }
    }, "ท", s.theory, " ป", s.practical, " น", s.credit), /*#__PURE__*/React.createElement(TickRail, {
      required: req,
      placed: done
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => startEditSubject(s),
      className: "x-btn",
      title: "แก้ไขวิชานี้"
    }, /*#__PURE__*/React.createElement(Edit2, {
      className: "w-4 h-4"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => handleDeleteSubject(s.id),
      className: "x-btn",
      style: {
        color: 'var(--danger)'
      },
      title: "ลบวิชานี้"
    }, /*#__PURE__*/React.createElement(Trash2, {
      className: "w-4 h-4"
    })))));
  }))))), isClassModalOpen && /*#__PURE__*/React.createElement("div", {
    className: "ov",
    onClick: () => setIsClassModalOpen(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      maxWidth: 660
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "modal-title"
  }, "ห้องเรียน"), /*#__PURE__*/React.createElement("div", {
    className: "modal-sub"
  }, deptClasses.length, " ห้องของแผนก", classes.length - deptClasses.length > 0 ? ` · ${classes.length - deptClasses.length} กลุ่มนอกแผนก` : '', " · ชื่อห้องสร้างจากสาขา ระดับชั้น และเลขห้องโดยอัตโนมัติ")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsClassModalOpen(false),
    className: "x-btn"
  }, /*#__PURE__*/React.createElement(X, {
    className: "w-4 h-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box-title"
  }, /*#__PURE__*/React.createElement(Plus, {
    className: "w-3.5 h-3.5"
  }), " เพิ่มห้องเรียน"), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "สาขางาน"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "inp",
    placeholder: "เช่น ช่างไฟฟ้ากำลัง",
    value: newClassForm.major,
    onChange: e => setNewClassForm({
      ...newClassForm,
      major: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "ระดับชั้น"), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: newClassForm.level,
    onChange: e => {
      const lv = e.target.value;
      // สลับชื่อสาขาให้ตรงระดับชั้น เว้นแต่ผู้ใช้พิมพ์สาขาอื่นเองไว้แล้ว
      const keepCustom = newClassForm.major && !DEFAULT_MAJORS.includes(newClassForm.major.trim());
      setNewClassForm({
        ...newClassForm,
        level: lv,
        year: 1,
        major: keepCustom ? newClassForm.major : MAJOR_BY_LEVEL[lv]
      });
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "ปวช."
  }, "ปวช."), /*#__PURE__*/React.createElement("option", {
    value: "ปวส."
  }, "ปวส."))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "ชั้นปีที่"), /*#__PURE__*/React.createElement("select", {
    className: "sel mono",
    value: newClassForm.year,
    onChange: e => setNewClassForm({
      ...newClassForm,
      year: parseInt(e.target.value)
    })
  }, yearOptions(newClassForm.level, newClassForm.year).map(y => /*#__PURE__*/React.createElement("option", {
    key: y,
    value: y
  }, y)))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "ห้องที่"), /*#__PURE__*/React.createElement("select", {
    className: "sel mono",
    value: newClassForm.room,
    onChange: e => setNewClassForm({
      ...newClassForm,
      room: parseInt(e.target.value)
    })
  }, numOptions(MAX_ROOM_NO, newClassForm.room).map(r => /*#__PURE__*/React.createElement("option", {
    key: r,
    value: r
  }, r)))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "จำนวนนักเรียน"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "inp inp-num mono",
    placeholder: "30",
    value: newClassForm.studentCount,
    onChange: e => setNewClassForm({
      ...newClassForm,
      studentCount: e.target.value
    })
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "ครูที่ปรึกษา"), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: newClassForm.advisor,
    onChange: e => setNewClassForm({
      ...newClassForm,
      advisor: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "ยังไม่ระบุ"), teachers.map(t => /*#__PURE__*/React.createElement("option", {
    key: t.id,
    value: t.name
  }, t.name)))), /*#__PURE__*/React.createElement("div", {
    className: "note note-info",
    style: {
      marginBottom: 12
    }
  }, "จะได้ชื่อห้องว่า ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink)'
    }
  }, `${newClassForm.major.trim() ? newClassForm.major.trim() + ' ' : ''}${newClassForm.level} ${newClassForm.year}/${newClassForm.room}`), ' ', "· พักกลางวันคาบ ", newClassForm.level === 'ปวช.' ? 5 : 4), /*#__PURE__*/React.createElement("button", {
    onClick: handleAddClass,
    className: "btn btn-primary",
    style: {
      width: '100%'
    }
  }, "เพิ่มห้องเรียน")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 9
    }
  }, "ห้องเรียนทั้งหมด · แก้ไขได้ทันที"), deptClasses.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    className: "list-row"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17.5,
      fontWeight: 700
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 15,
      color: 'var(--ink-3)',
      marginLeft: 9
    }
  }, (classSubjects[c.id] || []).length, " วิชา · ", schedule.filter(s => s.classId === c.id && s.subjectId).length, " คาบ")), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleDeleteClass(c.id),
    className: "x-btn",
    style: {
      color: 'var(--danger)'
    },
    title: "ลบห้องเรียนนี้"
  }, /*#__PURE__*/React.createElement(Trash2, {
    className: "w-4 h-4"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      gridColumn: 'span 4'
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "สาขางาน"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "inp",
    style: {
      padding: '6px 8px',
      fontSize: 13.5
    },
    value: c.major || '',
    onChange: e => handleUpdateClassComplex(c.id, 'major', e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "ระดับชั้น"), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    style: {
      padding: '6px 8px',
      fontSize: 13.5
    },
    value: c.level || 'ปวช.',
    onChange: e => handleUpdateClassComplex(c.id, 'level', e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "ปวช."
  }, "ปวช."), /*#__PURE__*/React.createElement("option", {
    value: "ปวส."
  }, "ปวส."))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "ชั้นปีที่"), /*#__PURE__*/React.createElement("select", {
    className: "sel mono",
    style: {
      padding: '6px 8px',
      fontSize: 13.5
    },
    value: c.year || 1,
    onChange: e => handleUpdateClassComplex(c.id, 'year', parseInt(e.target.value))
  }, yearOptions(c.level, c.year).map(y => /*#__PURE__*/React.createElement("option", {
    key: y,
    value: y
  }, y)))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "ห้องที่"), /*#__PURE__*/React.createElement("select", {
    className: "sel mono",
    style: {
      padding: '6px 8px',
      fontSize: 13.5
    },
    value: c.room || 1,
    onChange: e => handleUpdateClassComplex(c.id, 'room', parseInt(e.target.value))
  }, numOptions(MAX_ROOM_NO, c.room).map(r => /*#__PURE__*/React.createElement("option", {
    key: r,
    value: r
  }, r)))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "นักเรียน"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "inp inp-num mono",
    style: {
      padding: '6px 8px',
      fontSize: 13.5
    },
    value: c.studentCount || '',
    onChange: e => handleUpdateClassComplex(c.id, 'studentCount', e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      gridColumn: 'span 4'
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "ครูที่ปรึกษา"), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    style: {
      padding: '6px 8px',
      fontSize: 13.5
    },
    value: c.advisor || '',
    onChange: e => handleUpdateClassComplex(c.id, 'advisor', e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "ยังไม่ระบุ"), c.advisor && !teachers.find(t => t.name === c.advisor) && /*#__PURE__*/React.createElement("option", {
    value: c.advisor
  }, c.advisor), teachers.map(t => /*#__PURE__*/React.createElement("option", {
    key: t.id,
    value: t.name
  }, t.name)))))))), classes.some(c => c.external) && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 9
    }
  }, "กลุ่มนอกแผนก · เกิดจากการพิมพ์ชื่อเองตอนวางคาบในมุมมองตารางสอน"), classes.filter(c => c.external).map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    className: "list-row",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: c.name,
    className: "inp",
    style: {
      padding: '7px 9px',
      fontSize: 14.5
    },
    onChange: e => setClasses(prev => prev.map(x => x.id === c.id ? {
      ...x,
      name: e.target.value
    } : x)),
    onBlur: () => saveHistory()
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      whiteSpace: 'nowrap'
    }
  }, schedule.filter(s => s.classId === c.id && s.subjectId).length, " คาบ"), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleDeleteClass(c.id),
    className: "x-btn",
    style: {
      color: 'var(--danger)',
      flexShrink: 0
    },
    title: "ลบกลุ่มนี้"
  }, /*#__PURE__*/React.createElement(Trash2, {
    className: "w-4 h-4"
  })))))))), isTeacherModalOpen && /*#__PURE__*/React.createElement("div", {
    className: "ov",
    onClick: () => safeCloseModal(editingTeacherId, () => setIsTeacherModalOpen(false))
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      maxWidth: 500
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "modal-title"
  }, "ครูผู้สอน"), /*#__PURE__*/React.createElement("div", {
    className: "modal-sub"
  }, teachers.length, " คนในระบบ")), /*#__PURE__*/React.createElement("button", {
    onClick: () => safeCloseModal(editingTeacherId, () => setIsTeacherModalOpen(false)),
    className: "x-btn"
  }, /*#__PURE__*/React.createElement(X, {
    className: "w-4 h-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box-title"
  }, /*#__PURE__*/React.createElement(Plus, {
    className: "w-3.5 h-3.5"
  }), " เพิ่มครูผู้สอน"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 130px',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "ชื่อ-สกุล"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "inp",
    placeholder: "ครูสมชาย ใจดี",
    value: newTeacherForm.name,
    onChange: e => setNewTeacherForm({
      ...newTeacherForm,
      name: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "ห้องประจำ"), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: newTeacherForm.roomId,
    onChange: e => setNewTeacherForm({
      ...newTeacherForm,
      roomId: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "ไม่ระบุ"), rooms.map(r => /*#__PURE__*/React.createElement("option", {
    key: r.id,
    value: r.id
  }, r.name))))), /*#__PURE__*/React.createElement("button", {
    onClick: handleAddTeacher,
    className: "btn btn-primary",
    style: {
      width: '100%',
      marginBottom: 10
    }
  }, "เพิ่มครูผู้สอน"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "btn btn-sm",
    style: {
      flex: 1,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Upload, {
    className: "w-3.5 h-3.5"
  }), " นำเข้า CSV", /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".csv",
    onChange: handleTeacherFileUpload,
    style: {
      display: 'none'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: downloadTeacherTemplate,
    className: "btn btn-sm",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Download, {
    className: "w-3.5 h-3.5"
  }), " ไฟล์ตัวอย่าง"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 9
    }
  }, "รายชื่อครูผู้สอน"), teachers.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "note note-info",
    style: {
      justifyContent: 'center'
    }
  }, "ยังไม่มีครูในระบบ เพิ่มด้านบนหรือนำเข้าจากไฟล์ CSV") : teachers.map(t => {
    const load = calculateTeacherSummary(t.id, schedule, classSubjects).sumHours;
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      className: "list-row"
    }, editingTeacherId === t.id ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 9
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 110px',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", {
      className: "lbl"
    }, "ชื่อ-สกุล"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "inp",
      style: {
        padding: '6px 8px',
        fontSize: 13.5
      },
      value: editTeacherForm.name,
      onChange: e => setEditTeacherForm({
        ...editTeacherForm,
        name: e.target.value
      })
    })), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", {
      className: "lbl"
    }, "ห้องประจำ"), /*#__PURE__*/React.createElement("select", {
      className: "sel",
      style: {
        padding: '6px 8px',
        fontSize: 13.5
      },
      value: editTeacherForm.roomId,
      onChange: e => setEditTeacherForm({
        ...editTeacherForm,
        roomId: e.target.value
      })
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "ไม่ระบุ"), rooms.map(r => /*#__PURE__*/React.createElement("option", {
      key: r.id,
      value: r.id
    }, r.name))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 7,
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: cancelEditTeacher,
      className: "btn btn-sm"
    }, "ยกเลิก"), /*#__PURE__*/React.createElement("button", {
      onClick: () => saveEditTeacher(t.id),
      className: "btn btn-accent btn-sm"
    }, /*#__PURE__*/React.createElement(Check, {
      className: "w-3.5 h-3.5"
    }), " บันทึก"))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17.5,
        fontWeight: 600
      }
    }, t.name), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 15,
        color: 'var(--ink-3)',
        marginTop: 2
      }
    }, t.roomId ? `ห้อง ${roomLabel(t.roomId)} · ` : '', "สอน ", load, " คาบ/สัปดาห์")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => startEditTeacher(t),
      className: "x-btn",
      title: "แก้ไข"
    }, /*#__PURE__*/React.createElement(Edit2, {
      className: "w-4 h-4"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => handleDeleteTeacher(t.id),
      className: "x-btn",
      style: {
        color: 'var(--danger)'
      },
      title: "ลบ"
    }, /*#__PURE__*/React.createElement(Trash2, {
      className: "w-4 h-4"
    })))));
  }))))), isTermModalOpen && /*#__PURE__*/React.createElement("div", {
    className: "ov",
    onClick: () => setIsTermModalOpen(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      maxWidth: 420
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "modal-title"
  }, "ปีการศึกษาและภาคเรียน"), /*#__PURE__*/React.createElement("div", {
    className: "modal-sub"
  }, "ใช้แสดงบนหัวกระดาษของทุกตารางที่พิมพ์ออกไป")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsTermModalOpen(false),
    className: "x-btn"
  }, /*#__PURE__*/React.createElement(X, {
    className: "w-4 h-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "ปีการศึกษา"), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: config.year,
    style: !config.year ? {
      color: 'var(--ink-3)',
      borderColor: 'var(--accent-line)',
      background: 'var(--accent-soft)'
    } : undefined,
    onChange: e => {
      const v = e.target.value;
      setConfig({
        ...config,
        year: v ? parseInt(v) : ''
      });
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "เลือกปีการศึกษา"), YEARS.map(y => /*#__PURE__*/React.createElement("option", {
    key: y,
    value: y
  }, y)))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "ภาคเรียน"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, [1, 2].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setConfig({
      ...config,
      term: t
    }),
    className: `btn ${config.term === t ? 'btn-primary' : ''}`,
    style: {
      flex: 1
    }
  }, "ภาคเรียนที่ ", t)))), /*#__PURE__*/React.createElement("div", {
    className: "note note-info"
  }, /*#__PURE__*/React.createElement(AlertCircle, {
    className: "w-4 h-4",
    style: {
      flexShrink: 0,
      marginTop: 1,
      color: 'var(--warn)'
    }
  }), /*#__PURE__*/React.createElement("div", null, "การเปลี่ยนตรงนี้เป็นการ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink)'
    }
  }, "แก้ป้ายกำกับของตารางชุดนี้"), " ไม่ได้เปิดตารางชุดใหม่", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, "ถ้าจะขึ้นภาคเรียนใหม่ ให้สำรองไฟล์ของภาคเดิมเก็บไว้ก่อน แล้วค่อยล้างข้อมูลเริ่มใหม่")))), /*#__PURE__*/React.createElement("div", {
    className: "modal-foot",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setIsTermModalOpen(false);
      setIsDataModalOpen(true);
    },
    className: "btn btn-sm"
  }, /*#__PURE__*/React.createElement(Save, {
    className: "w-3.5 h-3.5"
  }), " สำรองไฟล์ก่อน"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsTermModalOpen(false),
    className: "btn btn-accent"
  }, /*#__PURE__*/React.createElement(Check, {
    className: "w-4 h-4"
  }), " เสร็จสิ้น")))), auditResult && (() => {
    const {
      conflicts,
      shortages
    } = auditResult;
    const clean = conflicts.length === 0 && shortages.length === 0;
    const byType = {
      class: 'ห้องเรียนซ้อน',
      teacher: 'ครูซ้อน',
      room: 'ห้องซ้อน'
    };
    const goTo = it => {
      setAuditResult(null);
      setViewMode('student');
      if (it.classId) setCurrentClass(it.classId);
      if (it.day && it.period) setTimeout(() => handleCellClick(it.day, it.period), 60);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "ov",
      onClick: () => setAuditResult(null)
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal",
      style: {
        maxWidth: 580
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-head"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "modal-title"
    }, "ผลตรวจตาราง"), /*#__PURE__*/React.createElement("div", {
      className: "modal-sub"
    }, "สแกน ", classes.length, " ห้องเรียน · ", teachers.length, " ครู · ", rooms.length, " ห้อง · ", schedule.filter(x => x.subjectId).length, " คาบ")), /*#__PURE__*/React.createElement("button", {
      onClick: () => setAuditResult(null),
      className: "x-btn"
    }, /*#__PURE__*/React.createElement(X, {
      className: "w-4 h-4"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "modal-body",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, clean ? /*#__PURE__*/React.createElement("div", {
      className: "note",
      style: {
        background: 'var(--ok-soft)',
        border: '1px solid #A8D8C4',
        color: '#0E5A42'
      }
    }, /*#__PURE__*/React.createElement(Check, {
      className: "w-4 h-4",
      style: {
        flexShrink: 0,
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("span", null, "ไม่พบปัญหา ตารางไม่มีคาบชน และทุกวิชาลงครบตามหลักสูตรแล้ว")) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 22,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow"
    }, "คาบชน"), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 27.5,
        fontWeight: 600,
        marginTop: 3,
        color: conflicts.length ? 'var(--danger)' : 'var(--ok)'
      }
    }, conflicts.length)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow"
    }, "วิชาลงไม่ครบ"), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 27.5,
        fontWeight: 600,
        marginTop: 3,
        color: shortages.length ? 'var(--warn)' : 'var(--ok)'
      }
    }, shortages.length))), conflicts.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow",
      style: {
        marginBottom: 9
      }
    }, "คาบชน — ต้องแก้ก่อนประกาศตาราง"), conflicts.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "list-row",
      style: {
        borderColor: 'var(--danger-soft)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'var(--danger-soft)',
        color: 'var(--danger)',
        fontSize: 13,
        fontWeight: 700,
        padding: '3px 7px',
        borderRadius: 4,
        flexShrink: 0
      }
    }, byType[it.type]), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16.5,
        fontWeight: 600
      }
    }, it.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        color: 'var(--ink-3)',
        marginTop: 2
      }
    }, it.day, " คาบ ", it.period, " · ", it.detail)), /*#__PURE__*/React.createElement("button", {
      onClick: () => goTo(it),
      className: "btn btn-sm",
      style: {
        flexShrink: 0
      }
    }, "ไปแก้"))))), shortages.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow",
      style: {
        marginBottom: 9
      }
    }, "วิชาที่ยังลงไม่ครบตามหลักสูตร"), shortages.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "list-row"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        background: it.type === 'over' ? 'var(--danger-soft)' : 'var(--warn-soft)',
        color: it.type === 'over' ? 'var(--danger)' : 'var(--warn)',
        fontSize: 13,
        fontWeight: 700,
        padding: '3px 7px',
        borderRadius: 4,
        flexShrink: 0
      }
    }, it.type === 'over' ? 'เกิน' : 'ขาด'), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16.5,
        fontWeight: 600
      }
    }, it.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        color: 'var(--ink-3)',
        marginTop: 2
      }
    }, it.detail)), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setAuditResult(null);
        setViewMode('student');
        setCurrentClass(it.classId);
      },
      className: "btn btn-sm",
      style: {
        flexShrink: 0
      }
    }, "เปิดห้อง"))))))));
  })(), isRoomModalOpen && /*#__PURE__*/React.createElement("div", {
    className: "ov",
    onClick: () => safeCloseModal(editingRoomId, () => setIsRoomModalOpen(false))
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      maxWidth: 540
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "modal-title"
  }, "ทะเบียนห้อง"), /*#__PURE__*/React.createElement("div", {
    className: "modal-sub"
  }, deptRooms.length, " ห้องของแผนก", rooms.length - deptRooms.length > 0 ? ` · ${rooms.length - deptRooms.length} ห้องนอกแผนก` : '', " · ระบบเตือนทันทีเมื่อสองห้องเรียนใช้ห้องเดียวกันในเวลาเดียวกัน")), /*#__PURE__*/React.createElement("button", {
    onClick: () => safeCloseModal(editingRoomId, () => setIsRoomModalOpen(false)),
    className: "x-btn"
  }, /*#__PURE__*/React.createElement(X, {
    className: "w-4 h-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box-title"
  }, /*#__PURE__*/React.createElement(Plus, {
    className: "w-3.5 h-3.5"
  }), " เพิ่มห้อง"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '160px 1fr',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "ชื่อห้อง"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "inp",
    placeholder: "114, Shop 2",
    value: newRoomForm.name,
    onChange: e => setNewRoomForm({
      ...newRoomForm,
      name: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "หมายเหตุ"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "inp",
    placeholder: "เช่น โรงฝึกไฟฟ้า, ห้องทฤษฎี",
    value: newRoomForm.note,
    onChange: e => setNewRoomForm({
      ...newRoomForm,
      note: e.target.value
    })
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: handleAddRoom,
    className: "btn btn-primary",
    style: {
      width: '100%',
      marginBottom: 10
    }
  }, "เพิ่มห้อง"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "btn btn-sm",
    style: {
      flex: 1,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Upload, {
    className: "w-3.5 h-3.5"
  }), " นำเข้า CSV", /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".csv",
    onChange: handleRoomFileUpload,
    style: {
      display: 'none'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: downloadRoomTemplate,
    className: "btn btn-sm",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Download, {
    className: "w-3.5 h-3.5"
  }), " ไฟล์ตัวอย่าง"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 9
    }
  }, "ห้องทั้งหมด"), rooms.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "note note-info",
    style: {
      justifyContent: 'center'
    }
  }, "ยังไม่มีห้องในทะเบียน เพิ่มด้านบนหรือนำเข้าจากไฟล์ CSV แล้วระบบจะเริ่มตรวจห้องชนให้") : [...rooms].sort((a, b) => (a.external ? 1 : 0) - (b.external ? 1 : 0)).map(r => {
    const used = roomUsageCount(r.id);
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      className: "list-row"
    }, editingRoomId === r.id ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 9
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '140px 1fr',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", {
      className: "lbl"
    }, "ชื่อห้อง"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "inp",
      style: {
        padding: '6px 8px',
        fontSize: 13.5
      },
      value: editRoomForm.name,
      onChange: e => setEditRoomForm({
        ...editRoomForm,
        name: e.target.value
      })
    })), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", {
      className: "lbl"
    }, "หมายเหตุ"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "inp",
      style: {
        padding: '6px 8px',
        fontSize: 13.5
      },
      value: editRoomForm.note,
      onChange: e => setEditRoomForm({
        ...editRoomForm,
        note: e.target.value
      })
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 7,
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: cancelEditRoom,
      className: "btn btn-sm"
    }, "ยกเลิก"), /*#__PURE__*/React.createElement("button", {
      onClick: () => saveEditRoom(r.id),
      className: "btn btn-accent btn-sm"
    }, /*#__PURE__*/React.createElement(Check, {
      className: "w-3.5 h-3.5"
    }), " บันทึก"))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17.5,
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        flexWrap: 'wrap'
      }
    }, r.name, r.external && /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'var(--surface-2)',
        color: 'var(--ink-3)',
        fontSize: 12,
        fontWeight: 700,
        padding: '2px 7px',
        borderRadius: 4,
        border: '1px solid var(--rule)'
      }
    }, "นอกแผนก")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        color: 'var(--ink-3)',
        marginTop: 2
      }
    }, r.note ? `${r.note} · ` : '', "ใช้อยู่ ", used, " คาบ/สัปดาห์", r.external ? ' · ไม่แสดงในแท็บตารางห้อง' : '')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        saveHistory();
        setRooms(rooms.map(x => x.id === r.id ? {
          ...x,
          external: !x.external
        } : x));
      },
      className: "x-btn",
      title: r.external ? 'ย้ายมาเป็นห้องของแผนก' : 'ทำเป็นห้องนอกแผนก (ซ่อนจากแท็บตารางห้อง)'
    }, /*#__PURE__*/React.createElement(DoorOpen, {
      className: "w-4 h-4",
      style: {
        opacity: r.external ? .5 : 1
      }
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => startEditRoom(r),
      className: "x-btn",
      title: "แก้ไข"
    }, /*#__PURE__*/React.createElement(Edit2, {
      className: "w-4 h-4"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => handleDeleteRoom(r.id),
      className: "x-btn",
      style: {
        color: 'var(--danger)'
      },
      title: "ลบห้อง"
    }, /*#__PURE__*/React.createElement(Trash2, {
      className: "w-4 h-4"
    })))));
  }))))), isDataModalOpen && /*#__PURE__*/React.createElement("div", {
    className: "ov",
    onClick: () => setIsDataModalOpen(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      maxWidth: 520
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "modal-title"
  }, "พิมพ์ตารางและจัดการข้อมูล"), /*#__PURE__*/React.createElement("div", {
    className: "modal-sub"
  }, "ระบบบันทึกให้อัตโนมัติอยู่แล้ว ไฟล์สำรองใช้เมื่อต้องการย้ายเครื่องหรือเก็บไว้เป็นรุ่น")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsDataModalOpen(false),
    className: "x-btn"
  }, /*#__PURE__*/React.createElement(X, {
    className: "w-4 h-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box-title"
  }, /*#__PURE__*/React.createElement(Printer, {
    className: "w-3.5 h-3.5"
  }), " ออกไฟล์ PDF"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => handleExportPDF('current'),
    className: "btn btn-sm",
    style: {
      flexDirection: 'column',
      gap: 3,
      padding: '12px 8px'
    }
  }, /*#__PURE__*/React.createElement(Users, {
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "ตารางเรียนห้องนี้")), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleExportPDF('all'),
    className: "btn btn-sm",
    style: {
      flexDirection: 'column',
      gap: 3,
      padding: '12px 8px'
    }
  }, /*#__PURE__*/React.createElement(FileSpreadsheet, {
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "ตารางเรียนทุกห้อง")), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleExportPDF('teacher_current'),
    disabled: !activeTeacherObj.id,
    className: "btn btn-sm",
    style: {
      flexDirection: 'column',
      gap: 3,
      padding: '12px 8px'
    }
  }, /*#__PURE__*/React.createElement(User, {
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "ตารางสอนครูท่านนี้")), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleExportPDF('teacher_all'),
    disabled: teachers.length === 0,
    className: "btn btn-sm",
    style: {
      flexDirection: 'column',
      gap: 3,
      padding: '12px 8px'
    }
  }, /*#__PURE__*/React.createElement(Printer, {
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "ตารางสอนครูทุกคน")), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleExportPDF('room_current'),
    disabled: !activeRoomObj.id,
    className: "btn btn-sm",
    style: {
      flexDirection: 'column',
      gap: 3,
      padding: '12px 8px'
    }
  }, /*#__PURE__*/React.createElement(DoorOpen, {
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "ตารางใช้ห้องนี้")), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleExportPDF('room_all'),
    disabled: deptRooms.length === 0,
    className: "btn btn-sm",
    style: {
      flexDirection: 'column',
      gap: 3,
      padding: '12px 8px'
    }
  }, /*#__PURE__*/React.createElement(DoorOpen, {
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "ตารางใช้ห้องทุกห้อง")))), /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box-title"
  }, /*#__PURE__*/React.createElement(Save, {
    className: "w-3.5 h-3.5"
  }), " ไฟล์สำรองข้อมูล"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: exportBackup,
    className: "btn btn-sm",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Download, {
    className: "w-3.5 h-3.5"
  }), " บันทึกเป็นไฟล์"), /*#__PURE__*/React.createElement("label", {
    className: "btn btn-sm",
    style: {
      flex: 1,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(FolderOpen, {
    className: "w-3.5 h-3.5"
  }), " เปิดจากไฟล์", /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".json",
    onChange: importBackup,
    style: {
      display: 'none'
    }
  }))), lastSavedTime && /*#__PURE__*/React.createElement("div", {
    className: "hint",
    style: {
      marginTop: 9
    }
  }, "บันทึกอัตโนมัติล่าสุดเมื่อ ", lastSavedTime)), /*#__PURE__*/React.createElement("div", {
    className: "box",
    style: {
      borderColor: 'var(--danger-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "box-title",
    style: {
      color: 'var(--danger)'
    }
  }, /*#__PURE__*/React.createElement(AlertCircle, {
    className: "w-3.5 h-3.5"
  }), " ล้างข้อมูล"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleClearCurrentClass,
    className: "btn btn-ghost-danger btn-sm",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(RefreshCw, {
    className: "w-3.5 h-3.5"
  }), " ล้างตารางห้องนี้"), /*#__PURE__*/React.createElement("button", {
    onClick: handleClearAllData,
    className: "btn btn-danger btn-sm",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Trash2, {
    className: "w-3.5 h-3.5"
  }), " ล้างข้อมูลทั้งหมด")), /*#__PURE__*/React.createElement("div", {
    className: "hint",
    style: {
      marginTop: 9
    }
  }, "สำรองข้อมูลเป็นไฟล์ไว้ก่อนล้างทุกครั้ง เพราะกู้คืนไม่ได้หลังจากนั้น"))))), alertDialog.isOpen && /*#__PURE__*/React.createElement("div", {
    className: "ov",
    style: {
      zIndex: 90
    },
    onClick: () => setAlertDialog({
      isOpen: false,
      message: ''
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      maxWidth: 380
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-body",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17.5,
      lineHeight: 1.65,
      whiteSpace: 'pre-line',
      margin: '4px 0 16px'
    }
  }, alertDialog.message), /*#__PURE__*/React.createElement("button", {
    onClick: () => setAlertDialog({
      isOpen: false,
      message: ''
    }),
    className: "btn btn-primary",
    style: {
      width: '100%'
    }
  }, "ตกลง")))), confirmDialog.isOpen && /*#__PURE__*/React.createElement("div", {
    className: "ov",
    style: {
      zIndex: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      maxWidth: 410
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-title",
    style: {
      marginBottom: 8
    }
  }, confirmDialog.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--ink-3)',
      whiteSpace: 'pre-line',
      margin: 0
    }
  }, confirmDialog.message)), /*#__PURE__*/React.createElement("div", {
    className: "modal-foot",
    style: {
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setConfirmDialog(prev => ({
      ...prev,
      isOpen: false
    })),
    className: "btn"
  }, confirmDialog.cancelText), /*#__PURE__*/React.createElement("button", {
    onClick: executeConfirm,
    className: `btn ${confirmDialog.isDestructive ? 'btn-danger' : 'btn-accent'}`
  }, confirmDialog.confirmText)))));
}

// ==========================================
// Error Boundary
// ==========================================
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }
  componentDidCatch(error, info) {
    console.error('Timetable app crashed:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: PRINT_FONT,
          minHeight: '100vh',
          background: '#ECEEF3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24
        }
      }, /*#__PURE__*/React.createElement("style", null, `*{ font-family:${PRINT_FONT}; box-sizing:border-box; }`), /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 400,
          width: '100%',
          background: '#fff',
          border: '1px solid #CFD5DF',
          borderRadius: 10,
          padding: 28,
          textAlign: 'center'
        }
      }, /*#__PURE__*/React.createElement(AlertCircle, {
        style: {
          width: 26,
          height: 26,
          color: '#B81F2D',
          margin: '0 auto 12px'
        }
      }), /*#__PURE__*/React.createElement("h2", {
        style: {
          fontSize: 16.5,
          fontWeight: 700,
          color: '#0F1E3D',
          margin: '0 0 8px'
        }
      }, "แอปหยุดทำงานกลางคัน"), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: 14.5,
          color: '#48597D',
          lineHeight: 1.65,
          margin: '0 0 18px'
        }
      }, "ข้อมูลที่บันทึกไว้ยังอยู่ครบ กดปุ่มด้านล่างเพื่อกลับเข้าหน้าตารางอีกครั้ง"), /*#__PURE__*/React.createElement("button", {
        onClick: () => this.setState({
          hasError: false
        }),
        style: {
          width: '100%',
          background: '#0F1E3D',
          color: '#fff',
          fontWeight: 700,
          fontSize: 14.5,
          padding: '11px',
          borderRadius: 6
        }
      }, "กลับเข้าหน้าตาราง")));
    }
    return this.props.children;
  }
}
function App() {
  return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(TimetableApp, null));
}
// ---- window.storage polyfill: replaces the Claude-artifact-only window.storage API
// with a plain localStorage-backed implementation, so the app's autosave/load code
// works unmodified on a normal web host.
window.storage = {
  get: function (key) {
    return new Promise(function (resolve) {
      try {
        var v = window.localStorage.getItem(key);
        resolve({ value: v });
      } catch (e) {
        resolve({ value: null });
      }
    });
  },
  set: function (key, value) {
    return new Promise(function (resolve) {
      try { window.localStorage.setItem(key, value); } catch (e) {}
      resolve(true);
    });
  },
  delete: function (key) {
    return new Promise(function (resolve) {
      try { window.localStorage.removeItem(key); } catch (e) {}
      resolve(true);
    });
  }
};

var __rootEl = document.getElementById('root');
var __root = ReactDOM.createRoot(__rootEl);
__root.render(React.createElement(App));
