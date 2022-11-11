export const createIconRipple = (event: any) => {
	const selectedElement = event.currentTarget;
	const initialCss = selectedElement.style.cssText;
	event = event.touches ? event.touches[0] : event;

	const rect = selectedElement.getBoundingClientRect(),
		diameter = Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) * 2;
	selectedElement.style.cssText = ` 

    --scale: 0;   --opacity: 1; --ripple-background:   var(--ripple-background-color);  

    `;

	selectedElement.offsetTop;
	selectedElement.style.cssText = `
    ${initialCss}

         --ripple-background:  var(--ripple-background-color);
        --time: 1;  --opacity: 0;  --diameter:${diameter}; --left:${event.clientX - rect.left}; --top:${
		event.clientY - rect.top
	};
        `;
};
